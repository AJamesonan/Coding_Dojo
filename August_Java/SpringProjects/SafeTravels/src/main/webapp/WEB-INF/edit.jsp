<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div>
		<h2> Edit expense:</h2>
		<a href="/">Go Back</a>
	</div>
	<div>
	<form:form action="/expense/${expense.id}" method="PUT" modelAttribute="expense">
		<form:label path="name">Expense Name: </form:label>
		<form:input type="text" path="name" value="${expense.name}"/>
		<form:errors path="name"/><br>
		<form:label path="vendor">Vendor: </form:label>
		<form:input type="text" path="vendor" value="${expense.vendor}"/><br>
		<form:label path="amount">Amount: $</form:label>
		<form:input type="number" step="0.01" path="amount" value="${expense.amount }"/><br>
		<form:label path="description">Description: </form:label>
		<form:input type="text" path="description" value="${expense.description}"/><br>
		<input type="submit" value = "Submit"/>
	</form:form>
	</div>
</body>
</html>