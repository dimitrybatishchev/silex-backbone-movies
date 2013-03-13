<?php

namespace Movie\Controller;

use Movie\Controller;
use Movie\Model\Movie;
use Symfony\Component\HttpFoundation\Request;

class Api extends Controller
{
    public function initialize()
    {
        $this->app->get('/api/movie', array($this, 'listMovies'));
        $this->app->post('/api/movie', array($this, 'add'));
        $this->app->get('/api/movie/{id}', array($this, 'get'));
        $this->app->put('/api/movie/{id}', array($this, 'update'));
        $this->app->delete('/api/movie/{id}', array($this, 'delete'));
    }

    public function listMovies()
    {
        $stmt = $this->app['db']->query('SELECT * FROM movie ORDER BY id');
        $movies = $stmt->fetchAll(\PDO::FETCH_CLASS, get_class(new Movie));

        return json_encode($movies);
    }

    public function get($id)
    {
        $movie = $this->getMovie($id);

        return json_encode($movie);
    }

    public function add(Request $request)
    {
        $movie = Movie::create(json_decode($request->getContent(), true));
        $this->app['db']->insert('movie', $movie->toArray());
        return json_encode($movie);
    }

    public function update($id, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $movie = $this->getMovie($id);
        $movie->setTitle($data['title']);
        $movie->setCountry($data['country']);
        $movie->setDirector($data['director']);
        $movie->setYear($data['year']);
        $movie->setGenre($data['genre']);
        $this->app['db']->update('movie', $movie->toArray(), array('id' => $movie->getId()));

        return json_encode($movie);
    }

    public function delete($id)
    {
        $this->app['db']->delete('movie', array('id' => $id));

        return json_encode(array('success' => true));
    }

    private function getMovie($id)
    {
        $stmt = $this->app['db']->prepare('SELECT * FROM movie WHERE id = ?');
        $stmt->bindValue(1, $id);
        $stmt->execute();

        return Movie::create($stmt->fetch());
    }
}
