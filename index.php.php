<html>
<head>
	<title>jQuery Portfolio</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/scriptAjax.js"></script>
	<script type="text/javascript" src="js/filter.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
</head>
<body>
	
	<div id="overlay"></div>
	<div id="frame">
		<table id= "leftRight">
				<tr>
					<td><img id="left" src="images/left.png"></td>
					<td><img id="right" src="images/right.png"></td>
				</tr>
			</table>
		
		<img id="main" src="">
		<div id="description">
			<p></p>
		</div>
	</div>
	<div id="wrapper">
		<div id="menu">
			<h2>jQuery Portfolio</h2>
			<input id="search" type="text" placeholder="Search here">
		</div>
		<ul  id = "filter">
			<li>all</li>
			<li>nature</li>
			<li>city</li>
			<li>architecture</li>
		</ul>

		<ul id="portfolio">
			<?php  include_once("list.html");?>
		</ul>
	</div>
	<script type="text/javascript">

	</script>
</body>
</html>