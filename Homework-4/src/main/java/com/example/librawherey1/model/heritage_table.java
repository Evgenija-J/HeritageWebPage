package com.example.librawherey1.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//@AllArgsConstructor
//@Getter
//@Setter
@Data
@Entity
@Table(name = "heritage_table")
public class heritage_table {

    private String name;
    private String name_en;
    @Id
    private long id;
    private String description;
    private String type;
    private String workinghours;
    private String city;
    private String phone;
    private String website;
    private String coordinates;

    public heritage_table(String name, String name_en, long id,
                          String description, String type, String workinghours,
                          String city, String phone, String website, String coordinates) {
        this.name = name;
        this.name_en = name_en;
        this.id = id;
        this.description = description;
        this.type = type;
        this.workinghours = workinghours;
        this.city = city;
        this.phone = phone;
        this.website = website;
        this.coordinates = coordinates;
    }

    public heritage_table() {

    }
}
