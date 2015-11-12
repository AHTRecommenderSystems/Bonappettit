<%-- 
    Document   : test
    Created on : 11/11/2015, 11:35:07 PM
    Author     : tono
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Sistema Recomendador de Comidas</title>

        <!-- Bootstrap Core CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/styles.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="css/scrolling-nav.css" rel="stylesheet">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>

    <!-- The #page-top ID is part of the scrolling feature - the data-spy and data-target are part of the built-in Bootstrap scrollspy function -->

    <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand page-scroll" href="#page-top">Sistema Recomendador de Comida</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->

                        <li>
                            <a class="page-scroll" href="./index.jsp">Menu Principal</a>
                        </li>
                        <li class="dropdown">
                            <a href="about.jsp" class="dropdown-toggle" data-toggle="dropdown">Platillo<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="./form_add_dishes.jsp">Agregrar Un Platillo</a></li>

                            </ul>

                        </li>
                        <li class="dropdown">
                            <a href="about.jsp" class="dropdown-toggle" data-toggle="dropdown">Recomendaciones <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="./searcher_for_dishes.jsp">Platillo</a></li>
                                <li class="divider"></li>
                                <li><a href="./test.jsp">Categoria</a></li>

                            </ul>

                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>

        <div class="container">
            <div class="row">
                <!-- Intro Section -->
                <section id="intro" class="intro-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="panel-group" id="accordion">
                                    <div class="panel panel-default" id="panel1">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseOne" 
                                                   href="#collapseOne" class="collapsed">
                                                    Tipo
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse ">
                                            <div class="panel-body">
                                                <div class="form">
                                                    <div class="container">


                                                        <div class="row vdivide">
                                                            <div class="col-xs-4">
                                                                <div style="height:auto;text-align: left">

                                                                    <label class="checkbox">
                                                                        <input value="1" type="checkbox">   Panes y Masas  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="2" type="checkbox">   Pastas
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="3" type="checkbox">   Bizcochos y Galletas
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="4" type="checkbox">   Carnes
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="5" type="checkbox">   Aves
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="6" type="checkbox">   Pescados y Mariscos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="7" type="checkbox">   Ensaladas
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="8" type="checkbox">   Contenido Alcohólico  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="9" type="checkbox">   Salsas y Guarniciones  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="10" type="checkbox">   Sopas y Cremas 
                                                                    </label>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-4">
                                                                <div style="height:auto;text-align:left">
                                                                    <label class="checkbox">
                                                                        <input value="11" type="checkbox">   Arroces 
                                                                    </label>    
                                                                    <label class="checkbox">
                                                                        <input value="12" type="checkbox">   Legumbres y guisos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="13" type="checkbox">   Tartas y Dulces
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="14" type="checkbox">   Helados y Sorbetes  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="15" type="checkbox">   Frutas  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="16" type="checkbox">   Verduras 
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="17" type="checkbox">   Huevos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="18" type="checkbox">   Lácteos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="19" type="checkbox">   Frutos Secos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="20" type="checkbox">   Encurtidos y Conservas
                                                                    </label>
                                                                </div>

                                                            </div>

                                                            <div class="col-xs-4">
                                                                <div style="height:auto;text-align: left">
                                                                        
                                                                    <label class="checkbox">
                                                                        <input value="21" type="checkbox">   Postre
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="22" type="checkbox">   Bebida  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="23" type="checkbox">   Primeros Platos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="24" type="checkbox">   Segundos Platos  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="25" type="checkbox">   Entradas  
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="26" type="checkbox">   Acompañamiento
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="27" type="checkbox">   Emparedados
                                                                    </label>
                                                                    <label class="checkbox">
                                                                        <input value="28" type="checkbox">   Botana
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> <!--row-->


                                                    </div>
                                                </div><!--form-->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default" id="panel2">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseTwo" 
                                                   href="#collapseTwo" class="collapsed">
                                                    Sabor
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" style="text-align: 
                                             left">
                                            <div class="panel-body">
                                                <div class="form">
                                                    <div class="row vdivide">
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">

                                                                <label class="checkbox">
                                                                    <input value="29" type="checkbox">   Dulce
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="30" type="checkbox">   Salado
                                                                </label>

 
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">

                                                                <label class="checkbox">
                                                                    <input value="31" type="checkbox">   Agrio  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="32" type="checkbox">   Amargo
                                                                </label>


                                                            </div>

                                                        </div>

                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">
                                                                <label class="checkbox">
                                                                    <input value="33" type="checkbox">   Umami
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="34" type="checkbox">   Picante
                                                                </label>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default" id="panel3">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseThree"
                                                   href="#collapseThree" class="collapsed">
                                                    Ocasión
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="form">
                                                    <div class="row vdivide">
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">

                                                                <label class="checkbox">
                                                                    <input value="35" type="checkbox">   Hallowen  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="36" type="checkbox">   Navidad
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="37" type="checkbox">   San Valentín
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="38" type="checkbox">   Primavera 
                                                                </label>
                                                                

                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">
                                                                <label class="checkbox">
                                                                    <input value="39" type="checkbox">   Verano 
                                                                </label> 
                                                                <label class="checkbox">
                                                                    <input value="40" type="checkbox">   Otoño  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="41" type="checkbox">   Invierno
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="42" type="checkbox">   Desayunos 
                                                                </label>
                                                                

                                                            </div>

                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">
                                                                <label class="checkbox">
                                                                    <input value="43" type="checkbox">   Almuerzos  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="44" type="checkbox">   Meriendas 
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="45" type="checkbox">  Ocasión Especial  
                                                                </label>
                                                            </div>
                                                        </div>    

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default" id="panel4">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseFour"
                                                   href="#collapseFour" class="collapsed">
                                                    Región
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseFour" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="form">

                                                    <div class="row vdivide">
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">

                                                                <label class="checkbox">
                                                                    <input value="46" type="checkbox">   Italiana
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="47" type="checkbox">   Mediterránea
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="48" type="checkbox">   Asiática
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="49" type="checkbox">   Mexicana
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="50" type="checkbox">   Americana 
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="51" type="checkbox">   Hindú  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="52" type="checkbox">   Francesa  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="53" type="checkbox">   Tailandesa 
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">

                                                                <label class="checkbox">
                                                                    <input value="54" type="checkbox">   Cantonesa  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="55" type="checkbox">   Japonesa
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="56" type="checkbox">   China 
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="57" type="checkbox">   Medio Oriente  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="58" type="checkbox">   Alemana 
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="59" type="checkbox">   Argentina  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="60" type="checkbox">   Brasileña  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="61" type="checkbox">   Colombiana 
                                                                </label>

                                                            </div>

                                                        </div>

                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">
                                                                <label class="checkbox">
                                                                    <input value="62" type="checkbox">   Coreana
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="63" type="checkbox">   Cubana
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="64" type="checkbox">   Española  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="65" type="checkbox">   Filandesa  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="66" type="checkbox">   Griega  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="67" type="checkbox">   Holandesa  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="68" type="checkbox">   Indonesia 
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="69" type="checkbox">   Portuguesa
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default" id="panel5">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseFive"
                                                   href="#collapseFive" class="collapsed">
                                                    Salud
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseFive" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row vdivide">
                                                    <div class="col-xs-4">
                                                        <div style="height:auto;text-align: left">

                                                            <label class="checkbox">
                                                                <input value="70" type="checkbox">   Bajas en Colesterol
                                                            </label>
                                                            <label class="checkbox">
                                                                <input value="71" type="checkbox">   Diabéticos
                                                            </label>
                                                            <label class="checkbox">
                                                                <input value="72" type="checkbox">   Sin Lactosa
                                                            </label>

                                                        </div>
                                                    </div>
                                                    <div class="col-xs-4">
                                                        <div style="height:auto;text-align:left">

                                                            <label class="checkbox">
                                                                <input value="73" type="checkbox">   Celiacos  
                                                            </label>
                                                            <label class="checkbox">
                                                                <input value="74" type="checkbox">   Alérgicos
                                                            </label>


                                                        </div>

                                                    </div>
                                                    <div class="col-xs-4">
                                                        <div style="height:auto;text-align:left">

                                                            <label class="checkbox">
                                                                <input value="75" type="checkbox">   Bajar de Peso 
                                                            </label>
                                                            <label class="checkbox">
                                                                <input value="76" type="checkbox">   Vegetarianos
                                                            </label>


                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default" id="panel6">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseSix"
                                                   href="#collapseSix" class="collapsed">
                                                    Temperatura
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseSix" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row vdivide">
                                                    <div class="form" style="text-align: left">
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">


                                                                <label class="checkbox">
                                                                    <input value="77" type="checkbox">   Frio  
                                                                </label> 
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">
                                                                <label class="checkbox">
                                                                    <input value="78" type="checkbox">   Templado
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">
                                                                <label class="checkbox">
                                                                    <input value="79" type="checkbox">   Caliente
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="panel panel-default" id="panel7">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseSeven"
                                                   href="#collapseSeven" class="collapsed">
                                                    Tipo De Persona
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseSeven" class="panel-collapse collapse">
                                            <div class="panel-body">
                                                <div class="row vdivide">
                                                <div class="form" >
                                                         <div class="col-xs-4">
                                                             <div style="height:auto;text-align:left">
                                                               <label class="checkbox">
                                                        <input value="80" type="checkbox">   Bebes
                                                    </label>

                                                    <label class="checkbox">
                                                        <input value="81" type="checkbox">   Niños
                                                    </label>  
                                                             </div>
                                                         </div>       
                                                    <div class="col-xs-4">
                                                        <div style="height:auto;text-align:left">
                                                            <label class="checkbox">
                                                        <input value="82" type="checkbox">   Adultos
                                                    </label>

                                                    <label class="checkbox">
                                                        <input value="83" type="checkbox">   Familiares
                                                    </label>
                                                            
                                                        </div>
                                                    </div>    
                                                    <div class="col-xs-4">
                                                        <div style="height:auto;text-align:left">
                                                    <label class="checkbox">
                                                        <input value="84" type="checkbox">   Adultos Mayores
                                                    </label>
                                                        </div>
                                                    </div>   
                                                </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default" id="panel8">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-target="#collapseEigth"
                                                   href="#collapseEigth" class="collapsed">
                                                    Textura
                                                </a>
                                            </h4>

                                        </div>
                                        <div id="collapseEigth" class="panel-collapse collapse">
                                            <div class="panel-body">

                                                <div class="form">

                                                    <div class="row vdivide">
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">

                                                                <label class="checkbox">
                                                                    <input value="85" type="checkbox">   Liquidas
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="86" type="checkbox">   Blandas
                                                                </label>


                                                            </div>
                                                        </div>
                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align:left">

                                                                <label class="checkbox">
                                                                    <input value="87" type="checkbox">   Semi-Blandas  
                                                                </label>
                                                                <label class="checkbox">
                                                                    <input value="88" type="checkbox">   Duras
                                                                </label>


                                                            </div>

                                                        </div>

                                                        <div class="col-xs-4">
                                                            <div style="height:auto;text-align: left">
                                                                <label class="checkbox">
                                                                    <input value="89" type="checkbox">   Crujientes
                                                                </label>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div><!--acordion-->
                                <br>
                                <br>
                                <br>
                                <input type="submit" name="submit" id="submit" value="Agregar" class="btn btn-info pull-right">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>



        <!-- jQuery -->
        <script src="js/jquery.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="js/bootstrap.min.js"></script>

        <!-- Scrolling Nav JavaScript -->
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/scrolling-nav.js"></script>

    </body>

</html>

