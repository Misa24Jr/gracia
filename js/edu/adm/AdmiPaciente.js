//******************** ALUMNO **********************
var dialogsAdmiPaciente 		    = {};
var containerAdmiPaciente1		    = {};					
var containerAdmiPaciente2		    = {};
var containerAdmiPaciente3		    = {};
var containerAdmiPaciente4		    = {};
var editsAdmiPacienteCedula 	    = {};
var editsAdmiPacienteNombre 	    = {};
var editsAdmiPacienteApellido 	    = {};
var pbcAdmiPacienteRaza 		    = {};
var calendarAdmiPacienteFechaNac    = {};
var pbcAdmiPacienteSexo 		    = {};
var pbcAdmiPacientePais 		    = {};
var pbcAdmiPacienteRegion 		    = {};
var pbcAdmiPacienteCiudad 		    = {};
var editsAdmiPacienteEmergencia     = {};
var pcbAdmiPacienteMunicipio 	    = {};
var pcbAdmiPacienteParroquia 	    = {};
var editsAdmiPacienteRepreDireccion	= {};
var pcbAdmiPacienteProcedencia 	    = {};
var pcbAdmiPacienteCarrera 		    = {};
var pbcAdmiPacientePosicion      	= {};
var pcbAdmiPacientePeriodo 		    = {};
var editsAdmiPacienteRepreObserv	= {};
var imagesAdmiPacienteAlumno        = {};
//******************** MADRE **********************
var editsAdmiPacienteCedulaMadre 	= {};
var editsAdmiPacienteNombreMadre 	= {};
var editsAdmiPacienteApellidoMadre 	= {};
var pbcAdmiPacienteProfesionMadre 	= {};
var editsAdmiPacienteTelfMadre 		= {};
var imagesAdmiPacienteMadre         = {};
//******************** PADRE **********************
var editsAdmiPacienteCedulaPadre 	= {};
var editsAdmiPacienteNombrePadre 	= {};
var editsAdmiPacienteApellidoPadre 	= {};
var pbcAdmiPacienteProfesionPadre 	= {};
var editsAdmiPacienteTelfPadre 		= {};
var imagesAdmiPacientePadre         = {};
//**************** REPRESENTANTE ******************
var pbcAdmiPacienteParentescoRepre 	= {};
var pbcAdmiPacienteProfesionRepre 	= {};
var pbcAdmiPacienteSexoRepre 		= {};
var editsAdmiPacienteCedulaRepre	= {};
var editsAdmiPacienteNombreRepre	= {};
var editsAdmiPacienteApellidoRepre	= {};
var editsAdmiPacienteTelfHabRepre	= {};
var editsAdmiPacienteTelfCelRepre	= {};
var editsAdmiPacienteEmailRepre		= {};
var imagesAdmiPacienteRepre         = {};
//*************************************************
var imgButtonsAdmiPacienteGuardar   = {};
var imgButtonsAdmiPacienteLimpiar   = {};
var imgButtonsAdmiPacienteVerFicha  = {};
var imgButtonsAdmiPacienteBuscar    = {};
var imgButtonsAdmiPacienteSalir     = {};
var mwAdmiPaciente = {};// minWindow
var modFchAlu = new ModeloFichaAlumno();

//****************** ESTRUCTURAS DE MENU PARA EL DIALOGO *******************
/*var MenuDlgAdmiPaciente = {
    idPanelMenu : 0,
	level : 0,
    captions : ['Mantenimiento'],
    functs : [''],
	subMenues : [1],
    icons : [''], 
    enableOption : [true]	
};
	  	
var SubMenuAdmiPaciente = {	
	idPanelMenu : 1,
	level : 1,
    captions : ['Persona','Relación Estudiante Representante','Ingreso de Estudiante','Institución de Procedencia','Profesión','Periodo','Inscripción'],
    functs : ['exeShow("js/edu/adm/","MantPersona")','exeShow("js/edu/cnt/","MantPerAutorizada")','exeShow("js/edu/cnt/","IngresoAlumno")','exeShow("js/edu/cnt/","MantInsProcedencia")','exeShow("js/edu/adm/","MantProfesion")','exeShow("js/edu/pla/man/","MantPeriodo")','exeShow("js/edu/ins/","InscAlumnos")'],
    subMenues : [0,0,0,0,0,0,0,0,0],
    icons : ['images/persona_1.png','images/per_autorizada.png','images/ingresoalumno_1.png','images/tipoinstitucion_1.png','images/profesion_1.png','images/periodo_1.png','images/inscripcion_1.png'], 
    enableOption : [true,true,true,true,true,true,true],	
	parentMenu : MenuDlgAdmiPaciente,
	parentOpc : 0
};
*/
var AdmiPaciente = {
	windowName : 'AdmiPaciente',
	isCreate : false,
	
	show: function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsAdmiPaciente.isByClean())
 			this.limpiar('all');			
		dialogsAdmiPaciente.show();
	},
	
	hide: function() {
		dialogsAdmiPaciente.hide();
	},
	
	createMWs: function() {
		mwAdmiPaciente = desktop.addMinWindow('Admisión', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsAdmiPaciente.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
	},
	
	dialogsAdmiPaciente_Init: function() {		
        dialogsAdmiPaciente.setMinimizeXY(0,0);
		dialogsAdmiPaciente.setCenterScreen();
		dialogsAdmiPaciente.addSpace(1,0,40);            
        containerAdmiPaciente4.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmiPaciente3.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmiPaciente2.setFontTitle('verdana', 12, '#7e7e7e');
        containerAdmiPaciente1.setFontTitle('verdana', 12, '#7e7e7e');  
        dialogsAdmiPaciente.addObject(editsAdmiPacienteCedula,20,44);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteNombre,20,75);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteApellido,20,106);		
		dialogsAdmiPaciente.addObject(editsAdmiPacienteTelfCelRepre,20, 137);
		dialogsAdmiPaciente.addObject(editsAdmiPacienteRepreDireccion,20, 168);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteEmailRepre,20, 199);
		dialogsAdmiPaciente.addObject(editsAdmiPacienteTelfHabRepre,20, 230);			
		dialogsAdmiPaciente.addObject(imagesAdmiPacienteAlumno,271, 80);
		imagesAdmiPacienteAlumno.setSize(78,62);		
		//dialogsAdmiPaciente.addObject(pbcAdmiPacienteParentescoRepre,20, 261);
		//dialogsAdmiPaciente.addObject(editsAdmiPacienteCedulaRepre,20, 292);
        //dialogsAdmiPaciente.addObject(editsAdmiPacienteNombreRepre,20, 323);
        //dialogsAdmiPaciente.addObject(editsAdmiPacienteApellidoRepre,20, 354);		
		//dialogsAdmiPaciente.addObject(imagesAdmiPacienteRepre,271, 290);
		//imagesAdmiPacienteRepre.setSize(74,62);		
		dialogsAdmiPaciente.addObject(imgButtonsAdmiPacienteGuardar,14, 265);
		dialogsAdmiPaciente.addObject(imgButtonsAdmiPacienteBuscar,126,265);
        //dialogsAdmiPaciente.addObject(imgButtonsAdmiPacienteLimpiar,57, 295);
		dialogsAdmiPaciente.addObject(imgButtonsAdmiPacienteSalir,236, 265);
		////////////////////////////////////////////////////////////////////////////////////////////////
		//dialogsAdmiPaciente.setMenu(MenuDlgAdmiPaciente);
		//dialogsAdmiPaciente.setSubMenu(SubMenuAdmiPaciente);
		//dialogsAdmiPaciente.addObject(containerAdmiPaciente1,20,32);
        //dialogsAdmiPaciente.addObject(containerAdmiPaciente2,20,232);
        //dialogsAdmiPaciente.addObject(containerAdmiPaciente3,20,335);
        //dialogsAdmiPaciente.addObject(containerAdmiPaciente4,20,439);  
		//dialogsAdmiPaciente.addObject(pbcAdmiPacienteRaza,35,92);
        //dialogsAdmiPaciente.addObject(calendarAdmiPacienteFechaNac,35,70);
		//calendarAdmiPacienteFechaNac.sendToFrom(100);	
        //dialogsAdmiPaciente.addObject(pbcAdmiPacienteSexo,280,70);        
        //dialogsAdmiPaciente.addObject(pbcAdmiPacientePais,522, 70);
        //dialogsAdmiPaciente.addObject(pbcAdmiPacienteRegion,35, 98);
        //dialogsAdmiPaciente.addObject(pcbAdmiPacienteMunicipio,280, 98);		
        //dialogsAdmiPaciente.addObject(pbcAdmiPacienteCiudad,522,98);
        //dialogsAdmiPaciente.addObject(pcbAdmiPacienteParroquia,35,126);		        
        //dialogsAdmiPaciente.addObject(editsAdmiPacienteEmergencia,522,126);		
        //dialogsAdmiPaciente.addObject(pcbAdmiPacienteProcedencia,35,184);
        //dialogsAdmiPaciente.addObject(pcbAdmiPacienteCarrera,35, 207);
        //dialogsAdmiPaciente.addObject(pbcAdmiPacientePosicion,280, 207);
        //dialogsAdmiPaciente.addObject(pcbAdmiPacientePeriodo,522, 207);
		//dialogsAdmiPaciente.addObject(editsAdmiPacienteRepreObserv,35, 182);				
		/*MADRE        
        dialogsAdmiPaciente.addObject(editsAdmiPacienteCedulaMadre,35, 245);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteNombreMadre,280, 245);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteApellidoMadre,522, 245);
        dialogsAdmiPaciente.addObject(pbcAdmiPacienteProfesionMadre,35, 280);
        ialogsAdmiPaciente.addObject(editsAdmiPacienteTelfMadre,522, 280);
		dialogsAdmiPaciente.addObject(imagesAdmiPacienteMadre,760, 239);
		imagesAdmiPacienteMadre.setSize(74,62);
		//PADRE
        dialogsAdmiPaciente.addObject(editsAdmiPacienteCedulaPadre,35, 348);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteNombrePadre,280, 348);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteApellidoPadre,522,348);
        dialogsAdmiPaciente.addObject(pbcAdmiPacienteProfesionPadre,35, 382);
        dialogsAdmiPaciente.addObject(editsAdmiPacienteTelfPadre,522, 382);*/
		//dialogsAdmiPaciente.addObject(imagesAdmiPacientePadre,760, 342);		
		//imagesAdmiPacientePadre.setSize(74,62);		
        //REPRESENTANTE       
        //dialogsAdmiPaciente.addObject(pbcAdmiPacienteProfesionRepre,280, 448);
        //dialogsAdmiPaciente.addObject(pbcAdmiPacienteSexoRepre,522, 448);	
		//BOTONES        
		//dialogsAdmiPaciente.addObject(imgButtonsAdmiPacienteVerFicha,379, 555);	
	},

  	create: function() {
  		dialogsAdmiPaciente = dialogs.create('dialogsAdmiPaciente',0,0,350,275,'ADMISIÓN');
		dialogsAdmiPaciente.setAdjY(60);
		calendarAdmiPacienteFechaNac = calendars.create("calendarAdmiPacienteFechaNac");
        calendarAdmiPacienteFechaNac.setValidEmpty();
        calendarAdmiPacienteFechaNac.setCaption('Fecha Nac.:',1,83);
        calendarAdmiPacienteFechaNac.setWidthEditCalendar(117);
  		editsAdmiPacienteCedula = edits.create('editsAdmiPacienteCedula','editsAdmiPacienteCedula','C.i. (*):',1,84,'normal');
  		editsAdmiPacienteCedula.setValidInteger();
  		editsAdmiPacienteCedula.setFieldFind(true);
        editsAdmiPacienteCedula.setSizeEdit(152);        
  		editsAdmiPacienteNombre = edits.create('editsAdmiPacienteNombre','editsAdmiPacienteNombre','Nombre (*):',1,84,'normal');
  		editsAdmiPacienteNombre.setValidEmpty();
  		editsAdmiPacienteNombre.setFieldFind(true);
        editsAdmiPacienteNombre.setSizeEdit(152);
        editsAdmiPacienteNombre.setMaxLength(50);        
  		editsAdmiPacienteApellido = edits.create('editsAdmiPacienteApellido','editsAdmiPacienteApellido','Apellido (*):',1,84,'normal');
  		editsAdmiPacienteApellido.setValidEmpty();
  		editsAdmiPacienteApellido.setFieldFind(true);
        editsAdmiPacienteApellido.setSizeEdit(152);
        editsAdmiPacienteApellido.setMaxLength(50);        
        editsAdmiPacienteEmergencia = edits.create('editsAdmiPacienteEmergencia','editsAdmiPacienteEmergencia','N°- Historia :',1,86,'normal');
        editsAdmiPacienteEmergencia.setValidEmpty();
        editsAdmiPacienteEmergencia.setSizeEdit(136);
        editsAdmiPacienteEmergencia.setMaxLength(150);        
        pbcAdmiPacienteRaza = powerComboBox.create('pbcAdmiPacienteRaza','pbcAdmiPacienteRaza','Indígena :',1,82);
		pbcAdmiPacienteRaza.enableReadOnlyEditor();
        pbcAdmiPacienteRaza.addEmptyOption();
        pbcAdmiPacienteRaza.setValidEmpty();
        pbcAdmiPacienteRaza.setDataType('string');
		pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'NO', 'NO');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Wayúu', 'Wayúu');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Añu', 'Añu');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Yukpa', 'Yukpa');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Japreria', 'Japreria');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Barí', 'Barí');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Piapoko', 'Piapoko');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Pemón', 'Pemón');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Kariña', 'Kariña');
		pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Panare', 'Panare');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Chaima', 'Chaima');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Maquiritare', 'Maquiritare');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Akawayo', 'Akawayo');
		pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Yabarana', 'Yabarana');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Mapoyo', 'Mapoyo');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Waike', 'Waike');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Yanomami', 'Yanomami');
		pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Wanikua', 'Wanikua');
        pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Waraos', 'Waraos');
		pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Waikerí', 'Waikerí');
		pbcAdmiPacienteRaza.addOptionAndSimpleValue(null, 'Wottuja-Piaroa', 'Wottuja-Piaroa');        
        pbcAdmiPacienteSexo = powerComboBox.create('pbcAdmiPacienteSexo','pbcAdmiPacienteSexo','Sexo :',1,78);
        pbcAdmiPacienteSexo.setDataType('string');
		pbcAdmiPacienteSexo.enableReadOnlyEditor();
        pbcAdmiPacienteSexo.addEmptyOption();
        pbcAdmiPacienteSexo.setValidEmpty();
        pbcAdmiPacienteSexo.addOptionAndSimpleValue(null, 'Femenino', 'Femenino');
        pbcAdmiPacienteSexo.addOptionAndSimpleValue(null, 'Masculino', 'Masculino');
        pbcAdmiPacientePais = powerComboBox.create('pbcAdmiPacientePais','pbcAdmiPacientePais','País :',1,82);
        pbcAdmiPacientePais.enableReadOnlyEditor();
        pbcAdmiPacientePais.addEmptyOption();
        pbcAdmiPacientePais.setValidEmpty();
        pbcAdmiPacientePais.enableOnChangeToEmptyOption();
        pbcAdmiPacienteRegion = powerComboBox.create('pbcAdmiPacienteRegion','pbcAdmiPacienteRegion','Región :',1,79);
        pbcAdmiPacienteRegion.enableReadOnlyEditor();
        pbcAdmiPacienteRegion.addEmptyOption();
        pbcAdmiPacienteRegion.setValidEmpty();
        pbcAdmiPacienteRegion.enableOnChangeToEmptyOption();
        pbcAdmiPacienteCiudad = powerComboBox.create('pbcAdmiPacienteCiudad','pbcAdmiPacienteCiudad','Ciudad :',1,82);
        pbcAdmiPacienteCiudad.enableReadOnlyEditor();
        pbcAdmiPacienteCiudad.addEmptyOption();
        pbcAdmiPacienteCiudad.setValidEmpty();
        pcbAdmiPacienteMunicipio = powerComboBox.create('pcbAdmiPacienteMunicipio','pcbAdmiPacienteMunicipio','Municipio :',1,78);
        pcbAdmiPacienteMunicipio.addEmptyOption();
        pcbAdmiPacienteMunicipio.setValidEmpty();
        pcbAdmiPacienteParroquia = powerComboBox.create('pcbAdmiPacienteParroquia','pcbAdmiPacienteParroquia','Parroquia :',1,79);
        pcbAdmiPacienteParroquia.addEmptyOption();
        pcbAdmiPacienteParroquia.setValidEmpty();
		pcbAdmiPacienteParroquia.setWidthCombo(372);
		imagesAdmiPacienteAlumno = images.create('imagesAdmiPacienteAlumno','imagesAdmiPacienteAlumno','images/pht/anonymous.png');	        
        pcbAdmiPacienteProcedencia = powerComboBox.create('pcbAdmiPacienteProcedencia','pcbAdmiPacienteProcedencia','Procedencia :',1,82);
        pcbAdmiPacienteProcedencia.setWidthCombo(611);
        pcbAdmiPacienteProcedencia.enableReadOnlyEditor();
        pcbAdmiPacienteProcedencia.addEmptyOption();
        pcbAdmiPacienteProcedencia.setValidEmpty();
        pcbAdmiPacienteCarrera = powerComboBox.create('pcbAdmiPacienteCarrera','pcbAdmiPacienteCarrera','Carrera :',1,82);
        pcbAdmiPacienteCarrera.enableReadOnlyEditor();
        pcbAdmiPacienteCarrera.addEmptyOption();
        pcbAdmiPacienteCarrera.setValidEmpty();
        pcbAdmiPacienteCarrera.enableOnChangeToEmptyOption();
        pbcAdmiPacientePosicion = powerComboBox.create('pbcAdmiPacientePosicion','pbcAdmiPacientePosicion','Posición :',1,79);                
        pbcAdmiPacientePosicion.enableReadOnlyEditor();
        pbcAdmiPacientePosicion.addEmptyOption();
        pbcAdmiPacientePosicion.setValidEmpty();
        pcbAdmiPacientePeriodo = powerComboBox.create('pcbAdmiPacientePeriodo','pcbAdmiPacientePeriodo','Periodo :',1,78);
        pcbAdmiPacientePeriodo.enableReadOnlyEditor();
        pcbAdmiPacientePeriodo.addEmptyOption();
        pcbAdmiPacientePeriodo.setValidEmpty();                
        editsAdmiPacienteCedulaMadre = edits.create('editsAdmiPacienteCedulaMadre','editsAdmiPacienteCedulaMadre','C.i. (*):',1,82,'normal');
		editsAdmiPacienteCedulaMadre.setSizeEdit(149);
		editsAdmiPacienteCedulaMadre.setValidInteger();
		editsAdmiPacienteCedulaMadre.setFieldFind(true);
		editsAdmiPacienteNombreMadre = edits.create('editsAdmiPacienteNombreMadre','editsAdmiPacienteNombreMadre','Nombre (*):',1,79,'normal');
		editsAdmiPacienteNombreMadre.setSizeEdit(149);
		editsAdmiPacienteNombreMadre.setFieldFind(true);
		editsAdmiPacienteNombreMadre.setMaxLength(50);
		editsAdmiPacienteApellidoMadre = edits.create('editsAdmiPacienteApellidoMadre','editsAdmiPacienteApellidoMadre','Apellido (*):',1,78,'normal');
		editsAdmiPacienteApellidoMadre.setSizeEdit(149);
		editsAdmiPacienteApellidoMadre.setFieldFind(true);
		editsAdmiPacienteApellidoMadre.setMaxLength(50);
		pbcAdmiPacienteProfesionMadre = powerComboBox.create('pbcAdmiPacienteProfesionMadre','pbcAdmiPacienteProfesionMadre','Profesión :',1,82);
		pbcAdmiPacienteProfesionMadre.setWidthCombo(370);
		pbcAdmiPacienteProfesionMadre.enableReadOnlyEditor();
		pbcAdmiPacienteProfesionMadre.addEmptyOption();
		pbcAdmiPacienteProfesionMadre.setValidEmpty();
		editsAdmiPacienteTelfMadre = edits.create('editsAdmiPacienteTelfMadre','editsAdmiPacienteTelfMadre','Telf. Celular :',1,78,'normal');
  		editsAdmiPacienteTelfMadre.setSizeEdit(149);
  		editsAdmiPacienteTelfMadre.setMaxLength(20); 
  		editsAdmiPacienteTelfMadre.setValidEmpty();
  		editsAdmiPacienteTelfMadre.setMaskPhone();
		imagesAdmiPacienteMadre = images.create('imagesAdmiPacienteMadre','imagesAdmiPacienteMadre','images/pht/anonymous.png');  		
  		editsAdmiPacienteCedulaPadre = edits.create('editsAdmiPacienteCedulaPadre','editsAdmiPacienteCedulaPadre','C.i. (*):',1,82,'normal');
		editsAdmiPacienteCedulaPadre.setSizeEdit(149);
		editsAdmiPacienteCedulaPadre.setValidInteger();
		editsAdmiPacienteCedulaPadre.setFieldFind(true);
		editsAdmiPacienteNombrePadre = edits.create('editsAdmiPacienteNombrePadre','editsAdmiPacienteNombrePadre','Nombre (*):',1,79,'normal');
		editsAdmiPacienteNombrePadre.setSizeEdit(149);
		editsAdmiPacienteNombrePadre.setFieldFind(true);
		editsAdmiPacienteNombrePadre.setMaxLength(50);
		editsAdmiPacienteApellidoPadre = edits.create('editsAdmiPacienteApellidoPadre','editsAdmiPacienteApellidoPadre','Apellido (*):',1,78,'normal');
		editsAdmiPacienteApellidoPadre.setSizeEdit(149);
		editsAdmiPacienteApellidoPadre.setFieldFind(true);
		editsAdmiPacienteApellidoPadre.setMaxLength(50);
		pbcAdmiPacienteProfesionPadre = powerComboBox.create('pbcAdmiPacienteProfesionPadre','pbcAdmiPacienteProfesionPadre','Profesión :',1,82);
		pbcAdmiPacienteProfesionPadre.setWidthCombo(370);
		pbcAdmiPacienteProfesionPadre.enableReadOnlyEditor();
		pbcAdmiPacienteProfesionPadre.addEmptyOption();
		pbcAdmiPacienteProfesionPadre.setValidEmpty();
		editsAdmiPacienteTelfPadre = edits.create('editsAdmiPacienteTelfPadre','editsAdmiPacienteTelfPadre','Telf. Celular :',1,78,'normal');
  		editsAdmiPacienteTelfPadre.setSizeEdit(149);
  		editsAdmiPacienteTelfPadre.setMaxLength(20); 
  		editsAdmiPacienteTelfPadre.setValidEmpty();
  		editsAdmiPacienteTelfPadre.setMaskPhone();
		imagesAdmiPacientePadre = images.create('imagesAdmiPacientePadre','imagesAdmiPacientePadre','images/pht/anonymous.png');	
  		pbcAdmiPacienteParentescoRepre = powerComboBox.create('pbcAdmiPacienteParentescoRepre','pbcAdmiPacienteParentescoRepre','Parentesco :',1,82);
  		pbcAdmiPacienteParentescoRepre.enableReadOnlyEditor();
  		pbcAdmiPacienteParentescoRepre.addEmptyOption();
  		pbcAdmiPacienteParentescoRepre.setValidEmpty();
  		pbcAdmiPacienteProfesionRepre = powerComboBox.create('pbcAdmiPacienteProfesionRepre','pbcAdmiPacienteProfesionRepre','Profesión :',1,79);
  		pbcAdmiPacienteProfesionRepre.enableReadOnlyEditor();
  		pbcAdmiPacienteProfesionRepre.addEmptyOption();
  		pbcAdmiPacienteProfesionRepre.setValidEmpty();
		pbcAdmiPacienteSexoRepre = powerComboBox.create('pbcAdmiPacienteSexoRepre','pbcAdmiPacienteSexoRepre','Sexo :',1,78);
		pbcAdmiPacienteSexoRepre.setDataType('string');
		pbcAdmiPacienteSexoRepre.enableReadOnlyEditor();
		pbcAdmiPacienteSexoRepre.addEmptyOption();
		pbcAdmiPacienteSexoRepre.setValidEmpty();
		pbcAdmiPacienteSexoRepre.addOptionAndSimpleValue(null, 'Femenino', 'Femenino');
		pbcAdmiPacienteSexoRepre.addOptionAndSimpleValue(null, 'Masculino', 'Masculino');
		editsAdmiPacienteCedulaRepre = edits.create('editsAdmiPacienteCedulaRepre','editsAdmiPacienteCedulaRepre','C.i. (*):',1,84,'normal');
		editsAdmiPacienteCedulaRepre.setSizeEdit(152);
		editsAdmiPacienteCedulaRepre.setValidInteger();
		editsAdmiPacienteCedulaRepre.setFieldFind(true);
		editsAdmiPacienteNombreRepre = edits.create('editsAdmiPacienteNombreRepre','editsAdmiPacienteNombreRepre','Nombre (*):',1,84,'normal');
		editsAdmiPacienteNombreRepre.setSizeEdit(152);
		editsAdmiPacienteNombreRepre.setFieldFind(true);
		editsAdmiPacienteNombreRepre.setMaxLength(50);
		editsAdmiPacienteApellidoRepre = edits.create('editsAdmiPacienteApellidoRepre','editsAdmiPacienteApellidoRepre','Apellido (*):',1,84,'normal');
		editsAdmiPacienteApellidoRepre.setSizeEdit(152);
		editsAdmiPacienteApellidoRepre.setFieldFind(true);
		editsAdmiPacienteApellidoRepre.setMaxLength(50);
		editsAdmiPacienteTelfHabRepre = edits.create('editsAdmiPacienteTelfHabRepre','editsAdmiPacienteTelfHabRepre','Telf. Hab :',1,84,'normal');
		editsAdmiPacienteTelfHabRepre.setSizeEdit(152);
		editsAdmiPacienteTelfHabRepre.setMaxLength(20); 
		editsAdmiPacienteTelfCelRepre = edits.create('editsAdmiPacienteTelfCelRepre','editsAdmiPacienteTelfCelRepre','Telf. Celular :',1,84,'normal');
		editsAdmiPacienteTelfCelRepre.setSizeEdit(152);
		editsAdmiPacienteTelfCelRepre.setMaxLength(20); 
		editsAdmiPacienteTelfCelRepre.setValidEmpty();
		editsAdmiPacienteTelfCelRepre.setMaskPhone();
		editsAdmiPacienteEmailRepre	= edits.create('editsAdmiPacienteEmailRepre','editsAdmiPacienteEmailRepre','Email :',1,84,'normal');
		editsAdmiPacienteEmailRepre.setSizeEdit(152);
		editsAdmiPacienteEmailRepre.setMaxLength(50); 
		editsAdmiPacienteRepreDireccion	= edits.create('editsAdmiPacienteRepreDireccion','editsAdmiPacienteRepreDireccion','Dirección :',1,84,'normal');
		editsAdmiPacienteRepreDireccion.setValidEmpty();
		editsAdmiPacienteRepreDireccion.setSizeEdit(152);
		editsAdmiPacienteRepreDireccion.setMaxLength(150);
		editsAdmiPacienteRepreObserv = edits.create('editsAdmiPacienteRepreObserv','editsAdmiPacienteRepreObserv','Observación :',1,82,'normal');
		editsAdmiPacienteRepreObserv.setSizeEdit(632);
		editsAdmiPacienteRepreObserv.setMaxLength(100);
		imagesAdmiPacienteRepre = images.create('imagesAdmiPacienteRepre','imagesAdmiPacienteRepre','images/pht/anonymous.png');		
		containerAdmiPaciente1 = container.create("containerAdmiPaciente1",'Paciente',4);
        containerAdmiPaciente1.setDimension(813,185);
        containerAdmiPaciente2 = container.create("containerAdmiPaciente2",'Madre',4);
        containerAdmiPaciente2.setDimension(813,86);
        containerAdmiPaciente3 = container.create("containerAdmiPaciente3",'Padre',4);
        containerAdmiPaciente3.setDimension(813,86);
        containerAdmiPaciente4 = container.create("containerAdmiPaciente4",'Representante',4);
        containerAdmiPaciente4.setDimension(813,100);
  		imgButtonsAdmiPacienteGuardar = imgButtons.create('imgButtonsAdmiPacienteGuardar','Guardar.','ok.png');
  		imgButtonsAdmiPacienteLimpiar = imgButtons.create('imgButtonsAdmiPacienteLimpiar','Limpiar','limpiar.png');
		imgButtonsAdmiPacienteVerFicha = imgButtons.create('imgButtonsAdmiPacienteVerFicha','Ver Ficha','print.png');
      	imgButtonsAdmiPacienteBuscar = imgButtons.create('imgButtonsAdmiPacienteBuscar','Buscar','icono_buscar.png');
		imgButtonsAdmiPacienteSalir = imgButtons.create('imgButtonsAdmiPacienteSalir','Salir','salir.png');
        imgButtonsAdmiPacienteGuardar.setDimension(98,22);
        imgButtonsAdmiPacienteLimpiar.setDimension(98,22);
        imgButtonsAdmiPacienteVerFicha.setDimension(98,22);
		imgButtonsAdmiPacienteBuscar.setDimension(98, 22);
		imgButtonsAdmiPacienteSalir.setDimension(98,22);
  	},

  	init: function() {
  		this.create();
  		this.setEvents();
  		this.dialogsAdmiPaciente_Init();
  		this.createMWs();
  	},
  	
  	limpiar: function(flag) {
  		if (flag == 'all') {
	  		imagesAdmiPacienteAlumno.getObject().refresh = true;
	  		editsAdmiPacienteCedula.clear();
			editsAdmiPacienteCedula.flagFind = true;
	  		editsAdmiPacienteCedula.hideId = -1;
	  		editsAdmiPacienteNombre.clear();
	  		editsAdmiPacienteApellido.clear();
	  		pbcAdmiPacienteRaza.setSelectedIndex(1);
			calendarAdmiPacienteFechaNac.setFechaToEdit(Tool.getDate());
	  		pbcAdmiPacienteSexo.setSelectedIndex(1);
	  		Tool.rstPwrCmb(pbcAdmiPacientePais);
	  		Tool.rstPwrCmb(pbcAdmiPacienteRegion);
	  		Tool.rstPwrCmb(pbcAdmiPacienteCiudad);
	  		pcbAdmiPacienteMunicipio.clear();
	  		pcbAdmiPacienteParroquia.clear();
	  		editsAdmiPacienteEmergencia.clear();
	  		editsAdmiPacienteRepreDireccion.clear();
	  		Tool.rstPwrCmb(pcbAdmiPacienteProcedencia);
	  		pcbAdmiPacienteProcedencia.hideId = -1;
	  		Tool.rstPwrCmb(pcbAdmiPacienteCarrera);
	  		Tool.rstPwrCmb(pbcAdmiPacientePosicion);
	  		Tool.rstPwrCmb(pcbAdmiPacientePeriodo);
	  		editsAdmiPacienteRepreObserv.clear();
	  		editsAdmiPacienteCedulaMadre.clear();
	  		editsAdmiPacienteCedulaMadre.hideId = -1;
	  		editsAdmiPacienteCedulaMadre.flagFind = true;
	  		editsAdmiPacienteCedulaMadre.tlfhab = "";
	  		editsAdmiPacienteCedulaMadre.email = "";
	  		editsAdmiPacienteNombreMadre.clear();
	  		editsAdmiPacienteApellidoMadre.clear();
	  		pbcAdmiPacienteProfesionMadre.setSelectedIndex(0);
	  		editsAdmiPacienteTelfMadre.delMaskPhone();
	  		editsAdmiPacienteCedulaPadre.clear();
	  		editsAdmiPacienteCedulaPadre.hideId = -1;
	  		editsAdmiPacienteCedulaPadre.flagFind = true;
	  		editsAdmiPacienteCedulaPadre.tlfhab = "";
	  		editsAdmiPacienteCedulaPadre.email = "";
	  		editsAdmiPacienteNombrePadre.clear();
	  		editsAdmiPacienteApellidoPadre.clear();
	  		pbcAdmiPacienteProfesionPadre.setSelectedIndex(0);
	  		editsAdmiPacienteTelfPadre.delMaskPhone();
	  		pbcAdmiPacienteParentescoRepre.setSelectedIndex(0);
	  		pbcAdmiPacienteProfesionRepre.setSelectedIndex(0);
	  		pbcAdmiPacienteSexoRepre.setSelectedIndex(0);
	  		editsAdmiPacienteCedulaRepre.clear();
	  		editsAdmiPacienteCedulaRepre.hideId = -1;
	  		editsAdmiPacienteCedulaRepre.flagFind = true;
	  		editsAdmiPacienteNombreRepre.clear();
	  		editsAdmiPacienteApellidoRepre.clear();
	  		editsAdmiPacienteTelfHabRepre.clear();
	  		editsAdmiPacienteTelfCelRepre.delMaskPhone();
	  		editsAdmiPacienteTelfCelRepre.setValue("+58");
	  		editsAdmiPacienteEmailRepre.clear();		
			imagesAdmiPacienteAlumno.setSource('images/pht/anonymous.png');
	  		dialogsAdmiPaciente.setMsg("");
	  		Tool.cnnSrv('MantObject', 'getAdmisionInit', this.windowName + '.loadDataInit()');
  		}
  		else 
  			this.buscarAlumno();
  	},
  	
    loadDataInit: function() {
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacientePais, 0, 1, json('getMantPais'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pcbAdmiPacienteMunicipio, 0, 0, json('getMcpio'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pcbAdmiPacienteParroquia, 0, 0, json('getParroq'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pcbAdmiPacienteProcedencia, 5, 0, json('getMantInsProcedencia'));
  		Tool.loadPowerComboData(dialogsAdmiPaciente, pcbAdmiPacienteCarrera, 0, 1, json('getCarrera'));
  		Tool.loadPowerComboData(dialogsAdmiPaciente, pcbAdmiPacientePeriodo, 0, 1, json('getMantPeriodoActivoPlan'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacienteProfesionMadre, 0, 1, json('getMantProfesion'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacienteProfesionPadre, 0, 1, json('getMantProfesion'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacienteProfesionRepre, 0, 1, json('getMantProfesion'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacienteParentescoRepre, 0, 1, json('getParentesco'));
		dialogsAdmiPaciente.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
    },

    loadDataAlumno: function() {
  		editsAdmiPacienteCedula.setValue(json('getAlumnoAdmision').data[0][0]);
  		editsAdmiPacienteNombre.setValue(json('getAlumnoAdmision').data[1][0]);
  		editsAdmiPacienteApellido.setValue(json('getAlumnoAdmision').data[2][0]);
  		pbcAdmiPacienteRaza.findOption(json('getAlumnoAdmision').data[3][0]);
  		calendarAdmiPacienteFechaNac.setFechaToEdit(json('getAlumnoAdmision').data[4][0]);
  		pbcAdmiPacienteSexo.findOption(json('getAlumnoAdmision').data[5][0]);
  		pbcAdmiPacientePais.findOption(json('getAlumnoAdmision').data[6][0]);
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacienteRegion, 0, 1, json('getRegionAsoPais'));
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacienteCiudad, 0, 1, json('getCiudadAsoRegionPais'));
  		pbcAdmiPacienteRegion.findOption(json('getAlumnoAdmision').data[7][0]);
  		pbcAdmiPacienteCiudad.findOption(json('getAlumnoAdmision').data[8][0]);
  		pcbAdmiPacienteMunicipio.setSelectedOption(json('getAlumnoAdmision').data[43][0]);
  		pcbAdmiPacienteParroquia.setSelectedOption(json('getAlumnoAdmision').data[44][0]);
  		
  		editsAdmiPacienteEmergencia.setValue(json('getAlumnoAdmision').data[9][0]);
  		editsAdmiPacienteRepreDireccion.setValue(json('getAlumnoAdmision').data[10][0]);
  		pcbAdmiPacienteProcedencia.findOption(json('getAlumnoAdmision').data[11][0]);
  		pcbAdmiPacienteProcedencia.hideId = json('getAlumnoAdmision').data[42][0];
  		pcbAdmiPacienteCarrera.findOption(json('getAlumnoAdmision').data[12][0]);
		Tool.loadPowerComboData(dialogsAdmiPaciente, pbcAdmiPacientePosicion, 0, 1, json('getMantPensumPosicion'));
  		pbcAdmiPacientePosicion.findOption(json('getAlumnoAdmision').data[13][0]);
  		pcbAdmiPacientePeriodo.findOption(json('getAlumnoAdmision').data[14][0]);
  		editsAdmiPacienteRepreObserv.setValue(json('getAlumnoAdmision').data[15][0]);
  		imagesAdmiPacienteAlumno.getObject().onerror = function() {imagesAdmiPacienteAlumno.setSource('images/pht/anonymous.png')};
  		imagesAdmiPacienteAlumno.setSource('images/pht/' + editsAdmiPacienteCedula.getValue() + '.jpg');
  		/*
  		editsAdmiPacienteCedulaMadre.hideId = json('getAlumnoAdmision').data[16][0];
  		editsAdmiPacienteCedulaMadre.setValue(json('getAlumnoAdmision').data[17][0]);
  		editsAdmiPacienteNombreMadre.setValue(json('getAlumnoAdmision').data[18][0]);
  		editsAdmiPacienteApellidoMadre.setValue(json('getAlumnoAdmision').data[19][0]);
  		pbcAdmiPacienteProfesionMadre.findOption(json('getAlumnoAdmision').data[20][0]);
  		editsAdmiPacienteTelfMadre.setValue(json('getAlumnoAdmision').data[21][0]);
		editsAdmiPacienteCedulaMadre.tlfhab = json('getAlumnoAdmision').data[38][0];
		editsAdmiPacienteCedulaMadre.email = json('getAlumnoAdmision').data[39][0];
		imagesAdmiPacienteMadre.getObject().onerror = function() {imagesAdmiPacienteMadre.setSource('images/pht/anonymous.png')};
		imagesAdmiPacienteMadre.setSource('images/pht/' + editsAdmiPacienteCedulaMadre.getValue() + '.jpg');
  		
  		editsAdmiPacienteCedulaPadre.hideId = json('getAlumnoAdmision').data[22][0];
  		editsAdmiPacienteCedulaPadre.setValue(json('getAlumnoAdmision').data[23][0]);
  		editsAdmiPacienteNombrePadre.setValue(json('getAlumnoAdmision').data[24][0]);
  		editsAdmiPacienteApellidoPadre.setValue(json('getAlumnoAdmision').data[25][0]);
  		pbcAdmiPacienteProfesionPadre.findOption(json('getAlumnoAdmision').data[26][0]);
  		editsAdmiPacienteTelfPadre.setValue(json('getAlumnoAdmision').data[27][0]);
		editsAdmiPacienteCedulaPadre.tlfhab = json('getAlumnoAdmision').data[40][0];
		editsAdmiPacienteCedulaPadre.email = json('getAlumnoAdmision').data[41][0];
		imagesAdmiPacientePadre.getObject().onerror = function() {imagesAdmiPacientePadre.setSource('images/pht/anonymous.png')};
		imagesAdmiPacientePadre.setSource('images/pht/' + editsAdmiPacienteCedulaPadre.getValue() + '.jpg');
  		
  		pbcAdmiPacienteParentescoRepre.findOption(json('getAlumnoAdmision').data[28][0]);
  		pbcAdmiPacienteProfesionRepre.findOption(json('getAlumnoAdmision').data[29][0]);
  		pbcAdmiPacienteSexoRepre.findOption(json('getAlumnoAdmision').data[30][0]);
  		editsAdmiPacienteCedulaRepre.hideId = json('getAlumnoAdmision').data[31][0];
  		editsAdmiPacienteCedulaRepre.setValue(json('getAlumnoAdmision').data[32][0]);
  		editsAdmiPacienteNombreRepre.setValue(json('getAlumnoAdmision').data[33][0]);
  		editsAdmiPacienteApellidoRepre.setValue(json('getAlumnoAdmision').data[34][0]);*/
  		editsAdmiPacienteTelfHabRepre.setValue(json('getAlumnoAdmision').data[35][0]);
  		editsAdmiPacienteTelfCelRepre.setValue(json('getAlumnoAdmision').data[36][0]);
  		editsAdmiPacienteEmailRepre.setValue(json('getAlumnoAdmision').data[37][0]);
  		//imagesAdmiPacienteRepre.getObject().onerror = function() {imagesAdmiPacienteRepre.setSource('images/pht/anonymous.png')};
  		//imagesAdmiPacienteRepre.setSource('images/pht/' + editsAdmiPacienteCedulaRepre.getValue() + '.jpg');
    },
    
    activeFlagAlumno: function() {
    	if (editsAdmiPacienteCedula.hideId == -1)
    		editsAdmiPacienteCedula.flagFind = true;    	
    },
    
	findByCedulaAlumno: function() {
		if (editsAdmiPacienteCedula.getValue() == "" || editsAdmiPacienteCedula.valid(dialogsAdmiPaciente)) {
			if (editsAdmiPacienteCedula.getValue() != '' && editsAdmiPacienteCedula.flagFind) {
				this.buscarAlumno();
			}
		}
    	else
    		editsAdmiPacienteCedula.clear();
	},
	
    buscarAlumno: function() {
        var rlx = xmlStructs.createRecordList("rlx");
    	
        imagesAdmiPacienteAlumno.getObject().refresh = true;
        if (editsAdmiPacienteCedula.hideId != -1 && editsAdmiPacienteCedula.getValue() != '') {
			if (editsAdmiPacienteNombre.getValue() != '' && editsAdmiPacienteApellido.getValue() != '') {
				editsAdmiPacienteCedula.flagFind = false;
				rlx.addInt('reg', editsAdmiPacienteCedula.hideId);
				Tool.cnnSrv('MantObject', 'getAlumnoAdmision', this.windowName + '.loadDataAlumno()', rlx);
			}
			else
				editsAdmiPacienteCedula.hideId = -1;
		}
		else {
			editsAdmiPacienteCedula.hideId = -1;
			ResuBusqueda.setObjectExtFnc(editsAdmiPacienteCedula, editsAdmiPacienteNombre, editsAdmiPacienteApellido, this.windowName + ".buscarAlumno()");			
			Tool.getGridData('MantObject', 'getAdmisionPersTodas', dialogsAdmiPaciente, gridsResuBusqueda, 'ResuBusqueda', editsAdmiPacienteCedula, editsAdmiPacienteCedula, editsAdmiPacienteNombre, editsAdmiPacienteNombre, editsAdmiPacienteApellido, editsAdmiPacienteApellido);
		}
   	},  

   	loadDataMadre: function() {
   		if (json('getMantPersTodas').data.length > 4) {
   			pbcAdmiPacienteProfesionMadre.findOption(json('getMantPersTodas').data[16][0]);
   			editsAdmiPacienteTelfMadre.setValue(json('getMantPersTodas').data[11][0]);
   		}
   	},
   	
	buscarMadre: function(src) {
		var fnd = false;
		
		if (src == 'C') { 
			if (editsAdmiPacienteCedulaMadre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteNombreMadre.clear();
				editsAdmiPacienteApellidoMadre.clear();
				fnd = true;
			}
		}
		else if (src == 'N') { 
			if (editsAdmiPacienteNombreMadre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteCedulaMadre.clear();
				editsAdmiPacienteApellidoMadre.clear();
				fnd = true;
			} 
		}
		else if (src == 'A') { 
			if (editsAdmiPacienteApellidoMadre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteCedulaMadre.clear();
				editsAdmiPacienteNombreMadre.clear();
				fnd = true;
			}
		}
		if (fnd) {
			imagesAdmiPacienteMadre.getObject().refresh = true;
			editsAdmiPacienteCedulaMadre.hideId = -1;
			editsAdmiPacienteCedulaMadre.flagFind = false;
			ResuBusqueda.setObjectExtFnc(editsAdmiPacienteCedulaMadre, editsAdmiPacienteNombreMadre, editsAdmiPacienteApellidoMadre, this.windowName + ".loadDataMadre()");
			Tool.getGridData('MantObject', 'getAdmiPacientePersTodas', dialogsAdmiPaciente, gridsResuBusqueda, 'ResuBusqueda', editsAdmiPacienteCedulaMadre, editsAdmiPacienteCedulaMadre, editsAdmiPacienteNombreMadre, editsAdmiPacienteNombreMadre, editsAdmiPacienteApellidoMadre, editsAdmiPacienteApellidoMadre);
		}
   	},  

   	loadDataPadre: function() {
   		if (json('getMantPersTodas').data.length > 4) {
   			pbcAdmiPacienteProfesionPadre.findOption(json('getMantPersTodas').data[16][0]);
   			editsAdmiPacienteTelfPadre.setValue(json('getMantPersTodas').data[11][0]);
   		}
   	},

    buscarPadre: function(src) {
		var fnd = false;
		
		if (src == 'C') { 
			if (editsAdmiPacienteCedulaPadre.valid(dialogsAdmiPaciente)) { 
				editsAdmiPacienteNombrePadre.clear();
				editsAdmiPacienteApellidoPadre.clear();
				fnd = true;
			}
		}
		else if (src == 'N') { 
			if (editsAdmiPacienteNombrePadre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteCedulaPadre.clear();
				editsAdmiPacienteApellidoPadre.clear();
				fnd = true;
			} 
		}
		else if (src == 'A') { 
			if (editsAdmiPacienteApellidoPadre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteCedulaPadre.clear();
				editsAdmiPacienteNombrePadre.clear();
				fnd = true;
			}
		}
		if (fnd) {
			imagesAdmiPacientePadre.getObject().refresh = true;
			editsAdmiPacienteCedulaPadre.hideId = -1;
			editsAdmiPacienteCedulaPadre.flagFind = false;
			ResuBusqueda.setObjectExtFnc(editsAdmiPacienteCedulaPadre, editsAdmiPacienteNombrePadre, editsAdmiPacienteApellidoPadre, this.windowName + ".loadDataPadre()");
			Tool.getGridData('MantObject', 'getAdmiPacientePersTodas', dialogsAdmiPaciente, gridsResuBusqueda, 'ResuBusqueda', editsAdmiPacienteCedulaPadre, editsAdmiPacienteCedulaPadre, editsAdmiPacienteNombrePadre, editsAdmiPacienteNombrePadre, editsAdmiPacienteApellidoPadre, editsAdmiPacienteApellidoPadre);
		}
   	},  

   	loadDataRepre: function() {
   		if (json('getMantPersTodas').data.length > 4) {
   			pbcAdmiPacienteProfesionRepre.findOption(json('getMantPersTodas').data[16][0]);
   			editsAdmiPacienteTelfCelRepre.setValue(json('getMantPersTodas').data[11][0]);
   			editsAdmiPacienteTelfHabRepre.setValue(json('getMantPersTodas').data[4][0]);
   			editsAdmiPacienteEmailRepre.setValue(json('getMantPersTodas').data[7][0]);
   		}
   	},

   	buscarRepre: function(src) {
		var fnd = false;
		
		if (src == 'C') { 
			if (editsAdmiPacienteCedulaRepre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteNombreRepre.clear();
				editsAdmiPacienteApellidoRepre.clear();
				fnd = true;
			}
		}
		else if (src == 'N') { 
			if (editsAdmiPacienteNombreRepre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteCedulaRepre.clear();
				editsAdmiPacienteApellidoRepre.clear();
				fnd = true;
			} 
		}
		else if (src == 'A') { 
			if (editsAdmiPacienteApellidoRepre.valid(dialogsAdmiPaciente)) {
				editsAdmiPacienteCedulaRepre.clear();
				editsAdmiPacienteNombreRepre.clear();
				fnd = true;
			}
		}
		if (fnd) {
	   		imagesAdmiPacienteRepre.getObject().refresh = true;
	  		editsAdmiPacienteCedulaRepre.hideId = -1;
	  		editsAdmiPacienteCedulaRepre.flagFind = false;
			ResuBusqueda.setObjectExtFnc(editsAdmiPacienteCedulaRepre, editsAdmiPacienteNombreRepre, editsAdmiPacienteApellidoRepre, this.windowName + ".loadDataRepre()");
			Tool.getGridData('MantObject', 'getAdmiPacientePersTodas', dialogsAdmiPaciente, gridsResuBusqueda, 'ResuBusqueda', editsAdmiPacienteCedulaRepre, editsAdmiPacienteCedulaRepre, editsAdmiPacienteNombreRepre, editsAdmiPacienteNombreRepre, editsAdmiPacienteApellidoRepre, editsAdmiPacienteApellidoRepre);
		}
   	},  

   	setMask: function(){
		editsAdmiPacienteTelfMadre.setMaskPhone(json('getDiscInter').data[0]);
		editsAdmiPacienteTelfPadre.setMaskPhone(json('getDiscInter').data[0]);
		editsAdmiPacienteTelfCelRepre.setMaskPhone(json('getDiscInter').data[0]);	
	},

    resetElements: function(element) {
    	if (element == 'pais') {
    		Tool.rstPwrCmb(pbcAdmiPacienteRegion);
    		Tool.rstPwrCmb(pbcAdmiPacienteCiudad);
    		pcbAdmiPacienteMunicipio.setSelectedIndex(0);
    		pcbAdmiPacienteParroquia.setSelectedIndex(0);
    		if (pbcAdmiPacientePais.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getRegionAsoPais', dialogsAdmiPaciente, pbcAdmiPacienteRegion, 0, 1, pbcAdmiPacientePais);		}
		else if (element == 'region') {
    		Tool.rstPwrCmb(pbcAdmiPacienteCiudad);
    		pcbAdmiPacienteMunicipio.setSelectedIndex(0);
    		pcbAdmiPacienteParroquia.setSelectedIndex(0);
    		if (pbcAdmiPacienteRegion.getOption() != "")
    			Tool.getPowerComboData('MantObject', 'getCiudadAsoRegionPais', dialogsAdmiPaciente, pbcAdmiPacienteCiudad, 0, 1, pbcAdmiPacientePais, pbcAdmiPacienteRegion);
    	}
		else if (element == 'carr') {
			Tool.rstPwrCmb(pbcAdmiPacientePosicion);
	    	if (pcbAdmiPacienteCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsAdmiPaciente, pbcAdmiPacientePosicion, 0, 1, pcbAdmiPacienteCarrera);
		}
	},

	setParentesco: function(flgClear) {
		if (pbcAdmiPacienteParentescoRepre.getText() == 1) {
        	if (editsAdmiPacienteCedulaMadre.valid(dialogsAdmiPaciente)) 
            	if (editsAdmiPacienteNombreMadre.valid(dialogsAdmiPaciente)) 
                	if (editsAdmiPacienteApellidoMadre.valid(dialogsAdmiPaciente)) 
                    	if (pbcAdmiPacienteProfesionMadre.valid(dialogsAdmiPaciente)) {
                    		editsAdmiPacienteCedulaRepre.hideId = editsAdmiPacienteCedulaMadre.hideId;
                    		pbcAdmiPacienteProfesionRepre.findOption(pbcAdmiPacienteProfesionMadre.getText());
                    		pbcAdmiPacienteSexoRepre.setSelectedIndex(1);
                    		editsAdmiPacienteCedulaRepre.setValue(editsAdmiPacienteCedulaMadre.getValue());
                    		editsAdmiPacienteNombreRepre.setValue(editsAdmiPacienteNombreMadre.getValue());
                    		editsAdmiPacienteApellidoRepre.setValue(editsAdmiPacienteApellidoMadre.getValue());
                    		editsAdmiPacienteTelfHabRepre.setValue(editsAdmiPacienteCedulaMadre.tlfhab);
                    		editsAdmiPacienteTelfCelRepre.setValue(editsAdmiPacienteTelfMadre.getValue());
                    		editsAdmiPacienteEmailRepre.setValue(editsAdmiPacienteCedulaMadre.email);
                    	}
		}
		else if (pbcAdmiPacienteParentescoRepre.getText() == 2) {
        	if (editsAdmiPacienteCedulaPadre.valid(dialogsAdmiPaciente)) 
            	if (editsAdmiPacienteNombrePadre.valid(dialogsAdmiPaciente)) 
                	if (editsAdmiPacienteApellidoPadre.valid(dialogsAdmiPaciente)) 
                    	if (pbcAdmiPacienteProfesionPadre.valid(dialogsAdmiPaciente)) {
                    		editsAdmiPacienteCedulaRepre.hideId = editsAdmiPacienteCedulaPadre.hideId;
                    		pbcAdmiPacienteProfesionRepre.findOption(pbcAdmiPacienteProfesionPadre.getText());
                    		pbcAdmiPacienteSexoRepre.setSelectedIndex(2);
                    		editsAdmiPacienteCedulaRepre.setValue(editsAdmiPacienteCedulaPadre.getValue());
                    		editsAdmiPacienteNombreRepre.setValue(editsAdmiPacienteNombrePadre.getValue());
                    		editsAdmiPacienteApellidoRepre.setValue(editsAdmiPacienteApellidoPadre.getValue());
                    		editsAdmiPacienteTelfHabRepre.setValue(editsAdmiPacienteCedulaPadre.tlfhab);
                    		editsAdmiPacienteTelfCelRepre.setValue(editsAdmiPacienteTelfPadre.getValue());
                    		editsAdmiPacienteEmailRepre.setValue(editsAdmiPacienteCedulaPadre.email);
                    	}
		}
		else if (flgClear) {
			pbcAdmiPacienteProfesionRepre.setSelectedIndex(0);
			pbcAdmiPacienteSexoRepre.setSelectedIndex(0);
			editsAdmiPacienteCedulaRepre.hideId = -1;
			editsAdmiPacienteCedulaRepre.clear();
    		editsAdmiPacienteNombreRepre.clear();
    		editsAdmiPacienteApellidoRepre.clear();
    		editsAdmiPacienteTelfHabRepre.clear();
    		editsAdmiPacienteTelfCelRepre.clear();
    		editsAdmiPacienteEmailRepre.clear();
		}
	},
	
	setEvents: function() {
		editsAdmiPacienteCedula.onChange(this.windowName + ".activeFlagAlumno()");
		editsAdmiPacienteCedula.onClick(this.windowName + ".limpiar('all')");
		editsAdmiPacienteCedula.onBlur(this.windowName + ".findByCedulaAlumno()");
		editsAdmiPacienteCedula.onEnter("editsAdmiPacienteNombre.setFocus()");
  		editsAdmiPacienteNombre.onEnter(this.windowName + ".buscarAlumno()");
  		editsAdmiPacienteApellido.onEnter(this.windowName + ".buscarAlumno()");
		pbcAdmiPacientePais.onChange(this.windowName + ".resetElements('pais')");
		pbcAdmiPacienteRegion.onChange(this.windowName + ".resetElements('region')");
		pcbAdmiPacienteCarrera.onChange(this.windowName + ".resetElements('carr')");
		imagesAdmiPacienteAlumno.onClick(this.windowName + ".copyPhotoAlumno()");
		
		editsAdmiPacienteCedulaMadre.onChange(this.windowName + ".activeFlagMadre()");
		editsAdmiPacienteCedulaMadre.onBlur(this.windowName + ".autoFindMadre()");
		editsAdmiPacienteCedulaMadre.onEnter(this.windowName + ".buscarMadre('C')");
		editsAdmiPacienteNombreMadre.onBlur("if (editsAdmiPacienteNombreMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmiPacienteNombreMadre.onEnter(this.windowName + ".buscarMadre('N')");
		editsAdmiPacienteApellidoMadre.onBlur("if (editsAdmiPacienteApellidoMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmiPacienteApellidoMadre.onEnter(this.windowName + ".buscarMadre('A')");
		pbcAdmiPacienteProfesionMadre.onChange(this.windowName + ".setParentesco(false)");
		editsAdmiPacienteTelfMadre.onBlur("if (editsAdmiPacienteTelfMadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
		editsAdmiPacienteTelfMadre.onFocus(this.windowName +".setMask()");
		imagesAdmiPacienteMadre.onClick(this.windowName + ".copyPhotoMadre()");

		editsAdmiPacienteCedulaPadre.onChange(this.windowName + ".activeFlagPadre()");
		editsAdmiPacienteCedulaPadre.onBlur(this.windowName + ".autoFindPadre()");
		editsAdmiPacienteCedulaPadre.onEnter(this.windowName + ".buscarPadre('C')");
		editsAdmiPacienteNombrePadre.onBlur("if (editsAdmiPacienteNombrePadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
  		editsAdmiPacienteNombrePadre.onEnter(this.windowName + ".buscarPadre('N')");
		editsAdmiPacienteApellidoPadre.onBlur("if (editsAdmiPacienteApellidoPadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
  		editsAdmiPacienteApellidoPadre.onEnter(this.windowName + ".buscarPadre('A')");	
		pbcAdmiPacienteProfesionPadre.onChange(this.windowName + ".setParentesco(false)");
		editsAdmiPacienteTelfPadre.onBlur("if (editsAdmiPacienteTelfPadre.getValue() != '') " + this.windowName + ".setParentesco(false)");
  		editsAdmiPacienteTelfPadre.onFocus(this.windowName +".setMask()");
		imagesAdmiPacientePadre.onClick(this.windowName + ".copyPhotoPadre()");

		pbcAdmiPacienteParentescoRepre.onChange(this.windowName + ".setParentesco(true)");
		editsAdmiPacienteCedulaRepre.onChange(this.windowName + ".activeFlagRepre()");
		editsAdmiPacienteCedulaRepre.onBlur(this.windowName + ".autoFindRepre()");
		editsAdmiPacienteCedulaRepre.onEnter(this.windowName + ".buscarRepre('C')");
  		editsAdmiPacienteNombreRepre.onEnter(this.windowName + ".buscarRepre('N')");
  		editsAdmiPacienteApellidoRepre.onEnter(this.windowName + ".buscarRepre('A')");
		editsAdmiPacienteTelfCelRepre.onFocus(this.windowName +".setMask()");
		imagesAdmiPacienteRepre.onClick(this.windowName + ".copyPhotoRepre()");	

		imgButtonsAdmiPacienteGuardar.onClick(this.windowName+".coreUpdate('guardar')");
		imgButtonsAdmiPacienteLimpiar.onClick(this.windowName+".limpiar('all')");
		imgButtonsAdmiPacienteVerFicha.onClick('exeShow("js/edu/ins/","Contacto")');
    	imgButtonsAdmiPacienteBuscar.onClick(this.windowName + ".buscarAlumno()");
		imgButtonsAdmiPacienteSalir.onClick("dialogsAdmiPaciente.close()");
	},

    activeFlagMadre: function() {
    	if (editsAdmiPacienteCedulaMadre.hideId == -1)
    		editsAdmiPacienteCedulaMadre.flagFind = true;    	
    },

	autoFindMadre : function() {
		if (editsAdmiPacienteCedulaMadre.getValue() == "" || editsAdmiPacienteCedulaMadre.valid(dialogsAdmiPaciente)) {
			if (editsAdmiPacienteCedulaMadre.getValue() != '' && editsAdmiPacienteCedulaMadre.flagFind) {
				if (editsAdmiPacienteCedulaMadre.getValue() != '') {
					this.setParentesco(false);
					this.buscarMadre('C');
				}
			}
		}
    	else
    		editsAdmiPacienteCedulaMadre.clear();
	},

    activeFlagPadre: function() {
    	if (editsAdmiPacienteCedulaPadre.hideId == -1)
    		editsAdmiPacienteCedulaPadre.flagFind = true;    	
    },

	autoFindPadre : function() {
		if (editsAdmiPacienteCedulaPadre.getValue() == "" || editsAdmiPacienteCedulaPadre.valid(dialogsAdmiPaciente)) {
			if (editsAdmiPacienteCedulaPadre.getValue() != '' && editsAdmiPacienteCedulaPadre.flagFind) {
				if (editsAdmiPacienteCedulaPadre.getValue() != '') {
					this.setParentesco(false);
					this.buscarPadre('C');
				}
			}
		}
    	else
    		editsAdmiPacienteCedulaPadre.clear();
	},

    activeFlagRepre: function() {
    	if (editsAdmiPacienteCedulaRepre.hideId == -1)
    		editsAdmiPacienteCedulaRepre.flagFind = true;    	
    },

	autoFindRepre : function() {
		if (editsAdmiPacienteCedulaRepre.getValue() == "" || editsAdmiPacienteCedulaRepre.valid(dialogsAdmiPaciente)) {
			if (editsAdmiPacienteCedulaRepre.getValue() != '' && editsAdmiPacienteCedulaRepre.flagFind) {
				if (editsAdmiPacienteCedulaRepre.getValue() != '') {
					this.setParentesco(false);
					this.buscarRepre('C');
				}
			}
		}
    	else
    		editsAdmiPacienteCedulaRepre.clear();
	},

	copyPhotoAlumno : function() {
		if (editsAdmiPacienteCedula.valid(dialogsAdmiPaciente))
			if (editsAdmiPacienteNombre.valid(dialogsAdmiPaciente))
				if (editsAdmiPacienteApellido.valid(dialogsAdmiPaciente)) {
					if (imagesAdmiPacienteAlumno.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmiPacienteCedula.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmiPacienteAlumno.getObject().refresh = false;
						imagesAdmiPacienteAlumno.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmiPacienteAlumno.getObject().refresh = true;
						imagesAdmiPacienteAlumno.getObject().onerror = function() {imagesAdmiPacienteAlumno.setSource('images/pht/anonymous.png')};
						imagesAdmiPacienteAlumno.setSource('images/pht/' + editsAdmiPacienteCedula.getValue() + '.jpg');
					}
				}
	},
    
	copyPhotoMadre : function() {
		if (editsAdmiPacienteCedulaMadre.valid(dialogsAdmiPaciente))
			if (editsAdmiPacienteNombreMadre.valid(dialogsAdmiPaciente))
				if (editsAdmiPacienteApellidoMadre.valid(dialogsAdmiPaciente)) {
					if (imagesAdmiPacienteMadre.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmiPacienteCedulaMadre.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmiPacienteMadre.getObject().refresh = false;
						imagesAdmiPacienteMadre.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmiPacienteMadre.getObject().refresh = true;
						imagesAdmiPacienteMadre.getObject().onerror = function() {imagesAdmiPacienteMadre.setSource('images/pht/anonymous.png')};
						imagesAdmiPacienteMadre.setSource('images/pht/' + editsAdmiPacienteCedulaMadre.getValue() + '.jpg');
					}
				}
	},

	copyPhotoPadre : function() {
		if (editsAdmiPacienteCedulaPadre.valid(dialogsAdmiPaciente))
			if (editsAdmiPacienteNombrePadre.valid(dialogsAdmiPaciente))
				if (editsAdmiPacienteApellidoPadre.valid(dialogsAdmiPaciente)) {
					if (imagesAdmiPacientePadre.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmiPacienteCedulaPadre.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmiPacientePadre.getObject().refresh = false;
						imagesAdmiPacientePadre.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmiPacientePadre.getObject().refresh = true;
						imagesAdmiPacientePadre.getObject().onerror = function() {imagesAdmiPacientePadre.setSource('images/pht/anonymous.png')};
						imagesAdmiPacientePadre.setSource('images/pht/' + editsAdmiPacienteCedulaPadre.getValue() + '.jpg');
					}
				}
	},

	copyPhotoRepre : function() {
		if (editsAdmiPacienteCedulaRepre.valid(dialogsAdmiPaciente))
			if (editsAdmiPacienteNombreRepre.valid(dialogsAdmiPaciente))
				if (editsAdmiPacienteApellidoRepre.valid(dialogsAdmiPaciente)) {
					if (imagesAdmiPacienteRepre.getObject().refresh) {
						AdjuArchivos.sizeFile = 1024 * 1024 / 2;//512Kb
						AdjuArchivos.filter('.jpg');
						AdjuArchivos.process(25);
						AdjuArchivos.parameter(editsAdmiPacienteCedulaRepre.getValue() + '.jpg');
						AdjuArchivos.show();
						imagesAdmiPacienteRepre.getObject().refresh = false;
						imagesAdmiPacienteRepre.setSource('images/pht/refresh.png');
					}
					else {
						imagesAdmiPacienteRepre.getObject().refresh = true;
						imagesAdmiPacienteRepre.getObject().onerror = function() {imagesAdmiPacienteRepre.setSource('images/pht/anonymous.png')};
						imagesAdmiPacienteRepre.setSource('images/pht/' + editsAdmiPacienteCedulaRepre.getValue() + '.jpg');
					}
				}
	},

	reporteFicha : function() {
		if(json('orientacionFicha').data[0][0] == 'V')
			modFchAlu.reporteFicVertical();
		else 
			modFchAlu.reporteFicHorizontal();
    },

	getFicha: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (this.valideCoreUpdate()) {
        	rlx.addInt('reg', editsAdmiPacienteCedula.hideId);
        	rlx.add('reg', pcbAdmiPacienteCarrera);
        	rlx.addInt('reg', editsAdmiPacienteCedula.hideId);
        	rlx.add('reg', pcbAdmiPacienteCarrera);
        	Tool.cnnSrv('ReportObject', 'getFicha', this.windowName + '.reporteFicha()', rlx);
        }
    },
  	
  	valideCoreUpdate: function() {
    	if (editsAdmiPacienteCedula.valid(dialogsAdmiPaciente)) 
        	if (editsAdmiPacienteNombre.valid(dialogsAdmiPaciente)) 
            	if (editsAdmiPacienteApellido.valid(dialogsAdmiPaciente)) 
                	if (editsAdmiPacienteRepreDireccion.valid(dialogsAdmiPaciente))
						if (editsAdmiPacienteTelfCelRepre.valid(dialogsAdmiPaciente)) 
	                		return true;
	                	else
	                		return false;
  	},
  	
  	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");

		if (this.valideCoreUpdate()) {
			rlx.addInt('reg', editsAdmiPacienteCedula.hideId, true);
			rlx.add('reg', editsAdmiPacienteCedula);
			rlx.add('reg', editsAdmiPacienteNombre);
			rlx.add('reg', editsAdmiPacienteApellido);
			rlx.add('reg', pbcAdmiPacienteRaza);
			rlx.add('reg', calendarAdmiPacienteFechaNac);
			rlx.add('reg', pbcAdmiPacienteSexo);
			rlx.add('reg', pbcAdmiPacientePais);
			rlx.add('reg', pbcAdmiPacienteRegion);
			rlx.add('reg', pbcAdmiPacienteCiudad);
			rlx.add('reg', editsAdmiPacienteEmergencia);
			rlx.add('reg', editsAdmiPacienteRepreDireccion);
  	  		
  	  		rlx.add('reg', pcbAdmiPacienteProcedencia);
  	  		rlx.add('reg', pcbAdmiPacienteCarrera);
  	  		rlx.add('reg', pbcAdmiPacientePosicion);
  	  		rlx.add('reg', pcbAdmiPacientePeriodo);
  	  		rlx.add('reg', editsAdmiPacienteRepreObserv);
  	  		
  	  		rlx.addInt('reg', editsAdmiPacienteCedulaMadre.hideId, true);
  	  		rlx.add('reg', editsAdmiPacienteCedulaMadre);
  	  		rlx.add('reg', editsAdmiPacienteNombreMadre);
  	  		rlx.add('reg', editsAdmiPacienteApellidoMadre);
  	  		rlx.add('reg', pbcAdmiPacienteProfesionMadre);
  	  		rlx.add('reg', editsAdmiPacienteTelfMadre);
  	  		
  	  		rlx.addInt('reg', editsAdmiPacienteCedulaPadre.hideId, true);
  	  		rlx.add('reg', editsAdmiPacienteCedulaPadre);
  	  		rlx.add('reg', editsAdmiPacienteNombrePadre);
  	  		rlx.add('reg', editsAdmiPacienteApellidoPadre);
  	  		rlx.add('reg', pbcAdmiPacienteProfesionPadre);
  	  		rlx.add('reg', editsAdmiPacienteTelfPadre);
  	  		
  	  		rlx.add('reg', pbcAdmiPacienteParentescoRepre);
  	  		rlx.add('reg', pbcAdmiPacienteProfesionRepre);
  	  		rlx.add('reg', pbcAdmiPacienteSexoRepre);
  	  		rlx.addInt('reg', editsAdmiPacienteCedulaRepre.hideId, true);
  	  		rlx.add('reg', editsAdmiPacienteCedulaRepre);
  	  		rlx.add('reg', editsAdmiPacienteNombreRepre);
  	  		rlx.add('reg', editsAdmiPacienteApellidoRepre);
  	  		rlx.add('reg', editsAdmiPacienteTelfHabRepre);
  	  		rlx.add('reg', editsAdmiPacienteTelfCelRepre);
  	  		rlx.add('reg', editsAdmiPacienteEmailRepre);
  	  		rlx.addStr('reg', json('getNacionalidad').data[0][0]);
  	  		rlx.addStr('reg', pbcAdmiPacientePais.getOption());
  	  		rlx.addInt('reg', pcbAdmiPacienteProcedencia.hideId, true);
			rlx.addStr('reg', pcbAdmiPacienteMunicipio.getOption());
			rlx.addStr('reg', pcbAdmiPacienteParroquia.getOption());
			
			rlx.addStr('reg', "caja");//tipo de admision: caja o historia medica
  	  		Tool.cnnSrv("MantObject", "guardarAdmision", this.windowName + ".limpiar('core')", rlx);
  		}
	}
};