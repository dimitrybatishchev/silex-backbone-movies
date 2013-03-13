<?php

namespace Movie\Model;

class Movie implements \JsonSerializable {
    private $id;

    private $title = '';
    
    private $country = '';
     
    private $director = '';
    
    private $year = '';
    
    private $genre = '';


    
    public function getId(){
        return $this->id;
    }

    public function setTitle($title){
        $this->title = $title;
    }

    public function getTitle(){
        return $this->title;
    }
    
    public function setCountry($country){
        $this->country = $country;
    }

    public function getCountry(){
        return $this->country;
    }
    
    public function setDirector($director){
        $this->director = $director;
    }

    public function getDirector(){
        return $this->director;
    }
    
    public function setYear($year){
        $this->year = $year;
    }

    public function getYear(){
        return $this->year;
    }
    
    public function setGenre($genre){
        $this->genre = $genre;
    }

    public function getGenre(){
        return $this->genre;
    }

    public function fromArray(array $data){
        $this->id = $data['id'];
        $this->title = $data['title'];
        $this->country = $data['country'];
        $this->director = $data['director'];
        $this->year = $data['year'];
        $this->genre = $data['genre'];

        return $this;
    }

    public function toArray(){
        return array(
            'id' => $this->id,
            'title' => $this->title,
            'country' => $this->country,
            'director' => $this->director,
            'year' => $this->year,
            'genre' => $this->genre,
        );
    }

    public function jsonSerialize(){
        return $this->toArray();
    }

    public static function create(array $data){
        $movie = new Movie();
        return $movie->fromArray($data);
    }
}