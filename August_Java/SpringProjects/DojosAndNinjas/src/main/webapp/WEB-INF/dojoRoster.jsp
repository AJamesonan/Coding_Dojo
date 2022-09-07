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
<title>Insert title here</title>
</head>
<body>

 	<h1>${dojo.name} Dojo Ninjas</h1>
<table>
	    <tr>
	        <th>First Name </th>
	        <th>Last Name</th>
	        <th>Age</th>
	    </tr>
	    
	  <c:forEach var="ninja" items="${ninjas}">
	    <tr>
	    
	        <td><c:out value="${ninja.firstName}"></c:out></td>
	        <td><c:out value="${ninja.lastName}"></c:out></td>
	        <td><c:out value="${ninja.age}"></c:out></td>
	        
	    </tr>
	  </c:forEach>
	</table>
</body>
</html>