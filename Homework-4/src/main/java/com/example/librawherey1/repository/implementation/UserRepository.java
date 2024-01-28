package com.example.librawherey1.repository.implementation;

import com.example.librawherey1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long>
{
    Optional<User> findByUsernameAndPassword(String username,String password);

}
