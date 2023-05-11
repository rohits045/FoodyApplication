package org.niir.NotificationService.repository;

import org.niir.NotificationService.domain.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface NotifocatioRepository extends MongoRepository<Notification,String> {
}
