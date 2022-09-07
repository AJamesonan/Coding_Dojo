<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Fruit Store</h1>
	
	<table>
		<tr>
			<th>Name</th>
			<th>Price</th>
		</tr>
		<c:forEach var="fruits" items="${fruitsFromMyController}">
		<tr>
			<th><c:out value = "${fruits.name}"></c:out></th>
			<th><c:out value="${fruits.price}"></c:out></th>
		</tr>
		</c:forEach>
	</table>
</body>
</html>