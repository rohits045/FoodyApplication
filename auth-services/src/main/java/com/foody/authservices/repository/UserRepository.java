package com.foody.authservices.repository;

import com.foody.authservices.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User,String> {
//    User findByEmailIdAndPassword(String emailId, String password);
}
