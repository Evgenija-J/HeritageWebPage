package com.example.librawherey1.service.impl;

import com.example.librawherey1.model.heritage_table;
import com.example.librawherey1.repository.MonumentRepository;
import com.example.librawherey1.service.MonumentService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MonumentServiceImpl implements MonumentService {

    private final MonumentRepository monumentRepository;

    public MonumentServiceImpl(MonumentRepository monumentRepository) {
        this.monumentRepository = monumentRepository;
    }

    @Override
    public ArrayList<heritage_table> findAll() {
        return (ArrayList<heritage_table>) this.monumentRepository.findAll();
    }



//    Function for calculating distance between a library and the selected school

    public static Double haversine(Double latLibrary, Double lonLibrary, Double latLocation, Double lonLocation)
    {
        Integer radius = 6371; // average radius of the earth in km

//        distance between specific lat and lon

        Double distanceLat = Math.toRadians(latLocation - latLibrary);
        Double distanceLon = Math.toRadians(lonLocation - lonLibrary);

//        calculating distance
        Double a = Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
                Math.cos(Math.toRadians(latLibrary)) * Math.cos(Math.toRadians(latLocation))
                        * Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2);

        Double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        Double distance = radius * c;

        return distance;
    }

}
