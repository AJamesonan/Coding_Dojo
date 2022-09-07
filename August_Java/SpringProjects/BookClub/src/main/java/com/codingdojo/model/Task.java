package com.codingdojo.model;

import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class Task extends TimerTask {
	   public void run() {

      Timer timer = new Timer(); // creating timer
      TimerTask task = new Task(); // creating timer task
      timer.scheduleAtFixedRate(task,new Date(),2000);
      // scheduling the task at the specified time at fixed-delay
	   }
}