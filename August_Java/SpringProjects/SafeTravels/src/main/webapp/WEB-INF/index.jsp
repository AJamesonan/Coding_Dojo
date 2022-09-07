<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div>
		<h1>Safe Travels</h1>
	</div>
	<div>
	<table>
	    <tr>
	        <th>Expense </th>
	        <th>Vendor</th>
	        <th>Amount</th>
	    </tr>
	    
	  <c:forEach var="expense" items="${expenses}">
	    <tr>
	        <td><a href="/expense/${expense.id}"><c:out value="${expense.name}"></c:out></a></td>
	        <td><c:out value="${expense.vendor}"></c:out></td>
	        <td>$<c:out value="${expense.amount}"></c:out></td>
	        <td><a href="/expense/${expense.id}/edit">edit</a></td>
	        <td><form action="/expense/${expense.id}" method="post">
    			<input type="hidden" name="_method" value="delete">
    			<input type="submit" value="Delete"></form></td>
	    </tr>
	  </c:forEach>
	</table>
	</div>
	<div>	
	<h2>Add an expense:</h2>
	</div>
	<div>
	<form:form action="/process/expense" method="POST" modelAttribute="expense">
		<form:label path="name">Expense Name: </form:label>
		<form:input type="text" path="name"/>
		<form:errors path="name"/><br>
		<form:label path="vendor">Vendor: </form:label>
		<form:input type="text" path="vendor"/><br>
		<form:label path="amount">Amount: </form:label>
		<form:input type="number" step="0.01" path="amount" value="$"/><br>
		<form:label path="description">Description: </form:label>
		<form:input type="text" path="description"/><br>
		<input type="submit" value = "Submit"/>
	</form:form>
	</div>
</body>
</html>