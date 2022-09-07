<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User</title>
</head>
<body>

 	<h1>Welcome ${user.userName} </h1>
 	<form action ="/logout" method="GET">
	<button type ="submit">
	Logout
	</button>
</form>
 	<a href="/add/book">+ Add to my shelf</a>
<table>
	    <tr>
	    	<th>ID</th>
	        <th>Title </th>
	        <th>Author Name</th>
	        <th>Posted By</th>
	        <th>Action</th>
	    </tr>
	    
	  <c:forEach var="book" items="${books}">
	    <tr>
	    	<td><c:out value="${book.id}"></c:out></td>
	        <td><a href="/${book.id}/details"><c:out value="${book.title}"></c:out></a></td>
	        <td><c:out value="${book.author}"></c:out></td>
	        <td><c:out value="${book.user.userName}"></c:out></td>
	        <td><form action="/${book.id}/book/delete" method="post">
    			<input type="hidden" name="_method" value="delete">
    			<input type="submit" value="Delete"></form>|<a href="/${book.id}/update">update</a></td>
    			
	    </tr>
	  </c:forEach>
	</table>
</body>
</html>