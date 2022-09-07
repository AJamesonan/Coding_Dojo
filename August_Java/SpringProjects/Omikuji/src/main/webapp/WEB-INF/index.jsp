<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1> Send an Omikuji!</h1>
	<div>
		<form action="/submit" method="POST">
		<select name="number"> 
		
			<option> 5 </option>
		
		</select><br>
		<label>Enter city name</label><br>
		<input type="text" name="city"><br>
		<label>Enter a persons name</label><br>
		<input type="text" name="person"><br>
		<label>Enter a profession or hobby</label><br>
		<input type="text" name="profession"><br>
		<label>Enter any type of living thing</label><br>
		<input type="text" name="livingThing"><br>
		<label>Say something nice or something</label><br>
		<input type="text" name="somethingNice"><br>
		send and show a friend <br>
		<input type="submit" value="Send"><br>
		</form>
	</div>
</body>
</html>