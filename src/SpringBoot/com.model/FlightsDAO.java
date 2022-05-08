package com.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FlightsDAO  extends CrudRepository<Flights,Integer> {

}
