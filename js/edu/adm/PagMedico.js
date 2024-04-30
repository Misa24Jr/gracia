var dialogsPagMedico             = {};
var editsPagoCi              = {};
var editsPagoNombre          = {};
var editsPagoApellido        = {}; 
var pcbPagoCarrera           = {};
var pcbPagoPeriodo           = {};
var gridsPagoDatAlumno       = {};
var editsPagoCliCi           = {};
var imgButtonsPagoCliCopiar  = {};
var editsPagoCliNombre       = {};
var editsPagoCliApellido     = {}; 
var editsPagoCliTelefono     = {};
var editsPagoCliDireccion    = {};
//var pcbPagoMedEstado     = {};
var editsPagoRecConcepto      ={};
var pcbPagoRecConceptoFzble  = {};
var imagesPagoRecIncluir     = {};
var gridsPagoRecCliente      = {};
var calendarPagoMedfecha     = {};
var editsPagoRecTotMora      = {};
var editsPagoRecTotDescuento = {};
var editsPagoRecTotDivisa    = {};
var editsPagoRecTotPagar     = {};
var imgButtonsPagoFacturar   = {};
var imgButtonsPagoLimpiar    = {};
var imgButtonsPagoBuscar     = {};
var imgButtonsPagMedReporte       = {};
var imgButtonsPagMedicoalir      = {};
var gridsPagoRecConcepto     = {};
var mwPagMedico = {};// minWindow
var procPagoMedico = new ProcPagoMedico();

var PagMedico = {
	windowName : 'PagMedico',
	isCreate : false,
	actRowCli : 1,
	pagoRepsActive : false,
	calcMontoActive : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsPagMedico.isByClean())
 			this.limpiar();			
		dialogsPagMedico.show();
	},
	
	hide : function() {
		dialogsPagMedico.hide();
	},
	
	createMWs : function() {
		mwPagMedico  = desktop.addMinWindow('Pago T', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsPagMedico .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsPagMedico_Init : function() {
        dialogsPagMedico.setMinimizeXY(0,0);
        dialogsPagMedico.setCenterScreen();
        dialogsPagMedico.addSpace(0,0,20);
        dialogsPagMedico.addLn(1,1,1);
		dialogsPagMedico.setHeightCell(1,1,10);
		//var c1 = container.create("c1",'', 2);
		//c1.setDimension(824,190);
		//c1.setMarginLeftBarTitle(20);
		//c1.setPropertyMarco('groove',1,'#7e7e7e');
		//c1.setFontTitle('verdana', 10, '#1e1e1e');
		//c1.addObject(pcbPagoCarrera, 41, 85);
		//c1.addObject(pcbPagoPeriodo, 575, 85);
		//c1.addObject(gridsPagoDatAlumno.getObject(), 40,75);	
		//dialogsPagMedico.addObjToDialog(c1, 2, 1);
      	//dialogsPagMedico.addLn(3, 1, 1);
		//dialogsPagMedico.setHeightCell(3,1,20);
      	var c2 = container.create("c2",'DATOS DEL RECIBO', 2);
		c2.setDimension(824,550);
		c2.setMarginLeftBarTitle(20);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana',10, '#1e1e1e');		
		c2.addObject(editsPagoCi, 41, 50);
		c2.addObject(editsPagoNombre, 309, 50);
		c2.addObject(editsPagoApellido, 575, 50);		
		//c2.addObject(editsPagoCliCi, 41, 252);
		//c2.addObject(imgButtonsPagoCliCopiar, 264, 272);
        //imgButtonsPagoCliCopiar.setDimension(16,17);
        //c2.addObject(editsPagoCliNombre, 300, 252);
		//c2.addObject(editsPagoCliApellido, 575, 252);
		//c2.addObject(editsPagoCliTelefono, 41, 279);
		//editsPagoCliTelefono.setSizeEdit(149);
		//c2.addObject(editsPagoCliDireccion, 300, 279);
		//editsPagoCliDireccion.setSizeEdit(426);
		//c2.addObject(editsPagoRecConcepto, 41, 78);
		c2.addObject(pcbPagoMedEstado, 309, 80);
		//c2.addObject(imagesPagoRecIncluir, 545,78);
		//c2.addObject(pcbPagoRecConceptoFzble, 575, 304);

		c2.addObject(gridsPagoDatMedico, 40,120);

		
		//c2.addObject(gridsPagoRecCliente.getObject(), 40,93);
		c2.addObject(calendarPagoMedfecha, 41, 80);
		//c2.addObject(editsPagoRecTotMora, 217, 542);
        //editsPagoRecTotMora.setSizeEdit(100);
        //c2.addObject(editsPagoRecTotDescuento, 368, 542);
        //editsPagoRecTotDescuento.setSizeEdit(100);
        //c2.addObject(editsPagoRecTotDivisa, 554, 542);
        //editsPagoRecTotDivisa.setSizeEdit(100);
       	c2.addObject(editsPagoRecTotPagar, 661, 550);
        editsPagoRecTotPagar.setSizeEdit(100);
      	dialogsPagMedico.addObjToDialog(c2, 4, 1);      		
		dialogsPagMedico.addLn(5, 1, 1);
		dialogsPagMedico.setHeightCell(5,1,15); 
      	dialogsPagMedico.addObjToDialog(imgButtonsPagoFacturar,6,1);
      	imgButtonsPagoFacturar.setDimension(130,22);        
		dialogsPagMedico.addObjToDialog(imgButtonsPagoLimpiar,6,1);
        imgButtonsPagoLimpiar.setDimension(130,22);
        dialogsPagMedico.addObjToDialog(imgButtonsPagoBuscar,6,1);
        imgButtonsPagoBuscar.setDimension(130,22);
        dialogsPagMedico.addObjToDialog(imgButtonsPagMedReporte,6,1);
        imgButtonsPagMedReporte.setDimension(130,22);
        dialogsPagMedico.addObjToDialog(imgButtonsPagMedicoalir,6,1);
        imgButtonsPagMedicoalir.setDimension(130,22);  
      	dialogsPagMedico.adjAllMarginObj(6,1,30);
        dialogsPagMedico.leftMarginObj(6,1,0,26);
        procPagoMedico.setEdits(editsPagoRecTotMora, editsPagoRecTotDescuento, editsPagoRecTotPagar, editsPagoRecTotDivisa);
	},

	gridsPagoDatAlumno_Init : function()  {
        gridsPagoDatAlumno.setFixColRow(false,true);
        gridsPagoDatAlumno.addTitleVectorX(['Cedula','Cuenta x Cobrar (Deuda)','Abono','Monto','Mes','F. Vencimiento','A�o Fiscal','idCuota/idCredito',
                                            'idPeriodo','poMora','poDescuento','tiDato','idConcepto','idPersAlumno','idCarrera','esCondInsc']);
        gridsPagoDatAlumno.showData();  
        gridsPagoDatAlumno.setSizeCol(1,0);      
        gridsPagoDatAlumno.setSizeCol(2,318);
        gridsPagoDatAlumno.setSizeCol(3,70);
        gridsPagoDatAlumno.setSizeCol(4,70);
        gridsPagoDatAlumno.setSizeCol(5,90);
        gridsPagoDatAlumno.setSizeCol(6,90);
        gridsPagoDatAlumno.setSizeCol(7,140);
        gridsPagoDatAlumno.setSizeCol(8,0);
        gridsPagoDatAlumno.setSizeCol(9,0);
        gridsPagoDatAlumno.setSizeCol(10,0);
        gridsPagoDatAlumno.setSizeCol(11,0);
        gridsPagoDatAlumno.setSizeCol(12,0);
        gridsPagoDatAlumno.setSizeCol(13,0);
        gridsPagoDatAlumno.setSizeCol(14,0);
        gridsPagoDatAlumno.setSizeCol(15,0);
        gridsPagoDatAlumno.setSizeCol(16,0);
        gridsPagoDatAlumno.hideCol(1);
        gridsPagoDatAlumno.hideCol(8);
        gridsPagoDatAlumno.hideCol(9);
        gridsPagoDatAlumno.hideCol(10);
        gridsPagoDatAlumno.hideCol(11);
        gridsPagoDatAlumno.hideCol(12);
        gridsPagoDatAlumno.hideCol(13);
        gridsPagoDatAlumno.hideCol(14);
        gridsPagoDatAlumno.hideCol(15);
        gridsPagoDatAlumno.hideCol(16);
        gridsPagoDatAlumno.sortEnable();
	},
  	









	
	gridsPagoDatMedico_Init : function(totalRows) {
		gridsPagoDatMedico = customGrid.create('gridsPagoDatMedico','',420,770,6,totalRows);
		gridsPagoDatMedico.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_CHECK,
		                                                        customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT, 
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																/*customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,																
																customGrid.TYPE_COLUMN_EDIT,																
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT,
																customGrid.TYPE_COLUMN_EDIT*/],
																[46,81,150,150,120,130/*,100,70,0,0,0,0,0,0,0,0,0,0,0,0,0*/]);
		gridsPagoDatMedico.addTitleVectorX(['','C.I.','Apellido','Nombre','Fecha','Monto'/*,'Modo Ingreso','F. Egreso','Saldo'/*,'idpers','idmodingreso','id_inst','idorg','idsuborg','idcarr','deingreso','idIngreso','idPeri','idPosi','cell','inscrito'*/]);
		gridsPagoDatMedico.setSelectedLnMode(0);
		gridsPagoDatMedico.addObjToTitle(0, gridsPagoDatMedico.createTitleObj(0,'input','checkbox'));
		gridsPagoDatMedico.activeCheckOnOff(0);
		/*gridsPagoDatMedico.hideCol(8); 
		gridsPagoDatMedico.hideCol(9); 
		gridsPagoDatMedico.hideCol(10); 
		gridsPagoDatMedico.hideCol(11); 
		gridsPagoDatMedico.hideCol(12); 
		gridsPagoDatMedico.hideCol(13); 
		gridsPagoDatMedico.hideCol(14); 
		gridsPagoDatMedico.hideCol(15); 
		gridsPagoDatMedico.hideCol(16); 
		gridsPagoDatMedico.hideCol(17); 
		gridsPagoDatMedico.hideCol(18); 
		gridsPagoDatMedico.hideCol(19); 
		gridsPagoDatMedico.hideCol(20); 
	    */
		
		for (var i=1; i<6; i++)
			gridsPagoDatMedico.setReadOnlyCol(i, true);
		gridsPagoDatMedico.hideBarTitle();
		gridsPagoDatMedico.hideBarControl();
	},
	









	gridsPagoRecCliente_Init : function()  {
        gridsPagoRecCliente.setFixColRow(false,true);
        gridsPagoRecCliente.addTitleVectorX(['N�','Cedula','Descripci�n','Mes','Monto','poMora','poDescuento','idConcepto',
        'abono','Fecha Vencimiento','idPeriodo','periodo','idCuota/idCredito','tiDato','idPersAlumno','idCarrera','esCondInsc','idRubro']);
        gridsPagoRecCliente.showData();        
        gridsPagoRecCliente.setSizeCol(1,50);//nro.
        gridsPagoRecCliente.setSizeCol(2,110);//cedula
        gridsPagoRecCliente.setSizeCol(3,618);//concepto
        gridsPagoRecCliente.setSizeCol(4,110);//mes
        gridsPagoRecCliente.setSizeCol(5,100);//monto
        gridsPagoRecCliente.setSizeCol(6,0);//porcentaje mora
        gridsPagoRecCliente.setSizeCol(7,0);//porcentaje desc.
        gridsPagoRecCliente.setSizeCol(8,0);//id concepto
        gridsPagoRecCliente.setSizeCol(9,0);//abono
        gridsPagoRecCliente.setSizeCol(10,0);//fecha venc.
        gridsPagoRecCliente.setSizeCol(11,0);//idperiodo
        gridsPagoRecCliente.setSizeCol(12,0);//nombre periodo
        gridsPagoRecCliente.setSizeCol(13,0);//id cuota o credito
        gridsPagoRecCliente.setSizeCol(14,0);//indica si es cuota o credito
        gridsPagoRecCliente.setSizeCol(15,0);//id persona alumno
        gridsPagoRecCliente.setSizeCol(16,0);//id carrera
        gridsPagoRecCliente.setSizeCol(17,0);//condiciona inscripcion
        gridsPagoRecCliente.setSizeCol(18,0);//id rubro
        //gridsPagoRecCliente.hideCol(4);
        gridsPagoRecCliente.hideCol(5);		
		gridsPagoRecCliente.hideCol(6);
        gridsPagoRecCliente.hideCol(7);
        gridsPagoRecCliente.hideCol(8);
        gridsPagoRecCliente.hideCol(9);
        gridsPagoRecCliente.hideCol(10);
        gridsPagoRecCliente.hideCol(11);
        gridsPagoRecCliente.hideCol(12);
        gridsPagoRecCliente.hideCol(13);
        gridsPagoRecCliente.hideCol(14);
        gridsPagoRecCliente.hideCol(15);
        gridsPagoRecCliente.hideCol(16);
        gridsPagoRecCliente.hideCol(17);
        gridsPagoRecCliente.hideCol(18);
	}, 	 	












  	gridsPagoRecConcepto_Init : function(totalRows) {
		gridsPagoRecConcepto = customGrid.create('gridsPagoRecConcepto','',281,826,23,totalRows);
		gridsPagoRecConcepto.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
		                                                customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT,
														customGrid.TYPE_COLUMN_EDIT],
														[510,280,0,0,8,0,0,0,0,0,0,0,0,0,0,0]);
		gridsPagoRecConcepto.addTitleVectorX(['Concepto','M�dico','idpersona','4','5','6','7','8','9','10','11','12','13','14','15','']);
		gridsPagoRecConcepto.setSelectedLnMode(0);
//		gridsPagoRecConcepto.addObjToTitle(0, gridsPagoRecConcepto.createTitleObj(0,'input','checkbox'));
//		gridsPagoRecConcepto.activeCheckOnOff(0);
	  	gridsPagoRecConcepto.hideCol(2);
	  	gridsPagoRecConcepto.hideCol(3);
	  	gridsPagoRecConcepto.hideCol(4);
	  	gridsPagoRecConcepto.hideCol(5);
	  	gridsPagoRecConcepto.hideCol(6);
	  	gridsPagoRecConcepto.hideCol(7);
        gridsPagoRecConcepto.hideCol(8);
        gridsPagoRecConcepto.hideCol(9);
	  	gridsPagoRecConcepto.hideCol(10);
	  	gridsPagoRecConcepto.hideCol(11);
	  	gridsPagoRecConcepto.hideCol(12);
	  	gridsPagoRecConcepto.hideCol(13);
	  	gridsPagoRecConcepto.hideCol(14);
	  	gridsPagoRecConcepto.hideCol(15);
		gridsPagoRecConcepto.hideBarTitle();
//		gridsPagoRecConcepto.alignBarTitle('left');
		gridsPagoRecConcepto.hideBarControl();
		for (var i=0; i<15; i++)
			gridsPagoRecConcepto.setReadOnlyCol(i, true);
	},

	create : function() {
		dialogsPagMedico = dialogs.create('dialogsPagMedico',0,0,865,600,'PAGO DEL TRABAJADOR');
		dialogsPagMedico.setAdjY(40);
		this.gridsPagoRecConcepto_Init(11);
		editsPagoCi = edits.create('editsPagoCi','editsPagoCi','C.i. (*):',1,83,'normal');
		editsPagoCi.setValidInteger();
		editsPagoCi.setFieldFind(true);
		editsPagoCi.setSizeEdit(150);
		editsPagoNombre = edits.create('editsPagoNombre','editsPagoNombre','Nombre (*):',1,100,'normal');
		editsPagoNombre.setValidEmpty();
		editsPagoNombre.setFieldFind(true);
		editsPagoNombre.setSizeEdit(150);
		editsPagoApellido = edits.create('editsPagoApellido','editsPagoApellido','Apellido (*):',1,100,'normal');
		editsPagoApellido.setValidEmpty();
		editsPagoApellido.setFieldFind(true);
		editsPagoApellido.setSizeEdit(150);
		pcbPagoCarrera = powerComboBox.create('pcbPagoCarrera', 'pcbPagoCarrera', 'Servicios (*):', 1,79);
		pcbPagoCarrera.setWidthCombo(428);
		pcbPagoCarrera.enableReadOnlyEditor();
		pcbPagoCarrera.addEmptyOption();
		pcbPagoCarrera.setValidEmpty();
		pcbPagoPeriodo = powerComboBox.create('pcbPagoPeriodo', 'pcbPagoPeriodo', 'A�o Fiscal (*):', 1,96);
		pcbPagoPeriodo.setWidthCombo(142);
		pcbPagoPeriodo.enableReadOnlyEditor();
		pcbPagoPeriodo.addEmptyOption();
		pcbPagoPeriodo.setValidEmpty();
		gridsPagoDatAlumno = grids.create('gridsPagoDatAlumno',4,16);
		editsPagoCliCi = edits.create('editsPagoCliCi','editsPagoCliCi','C.i./Rif. (*):',1,68,'normal');
		editsPagoCliCi.setValidEmpty();
		editsPagoCliCi.setFieldFind(true);
		editsPagoCliCi.setSizeEdit(149);
		imgButtonsPagoCliCopiar = imgButtons.create('imgButtonsPagoCliCopiar','','copy_1.png');
		editsPagoCliNombre = edits.create('editsPagoCliNombre','editsPagoCliNombre','Nombre (*):',1,98,'normal');
		editsPagoCliNombre.setValidEmpty();
		editsPagoCliNombre.setFieldFind(true);
		editsPagoCliNombre.setSizeEdit(149);
		editsPagoCliApellido = edits.create('editsPagoCliApellido','editsPagoCliApellido','Apellido (*):',1,100,'normal');
		editsPagoCliApellido.setValidEmpty();
		editsPagoCliApellido.setFieldFind(true);
		editsPagoCliApellido.setSizeEdit(149);
		editsPagoCliTelefono = edits.create('editsPagoCliTelefono','editsPagoCliTelefono','Tel�fono:',1,68,'normal');
		editsPagoCliTelefono.setValidEmpty();
		editsPagoCliDireccion = edits.create('editsPagoCliDireccion','editsPagoCliDireccion','Direcci�n:',1,98,'normal');
		editsPagoCliDireccion.setValidEmpty(); 
		pcbPagoMedEstado = powerComboBox.create('pcbPagoMedEstado', 'pcbPagoMedEstado', 'Estado:', 1,96);
		pcbPagoMedEstado.enableReadOnlyEditor();
		pcbPagoMedEstado.addEmptyOption();
		pcbPagoMedEstado.setValidEmpty();
		pcbPagoMedEstado.setTypeObjOpt('input', 'checkbox');
		pcbPagoMedEstado.setFirstRowCheckMode(2);		
		pcbPagoMedEstado.setWidthCombo(138);





		this.gridsPagoDatMedico_Init(20);


		editsPagoRecConcepto = edits.create('editsPagoRecConcepto','editsPagoRecConcepto','Concepto (*):',1,100,'normal');
		editsPagoRecConcepto.setValidEmpty();
		editsPagoRecConcepto.setFieldFind(true);
		editsPagoRecConcepto.setSizeEdit(406);
		pcbPagoRecConceptoFzble = powerComboBox.create('pcbPagoRecConceptoFzble', 'pcbPagoRecConceptoFzble', 'Cuenta x Cobrar:', 1,95);
		pcbPagoRecConceptoFzble.enableReadOnlyEditor();
		pcbPagoRecConceptoFzble.addEmptyOption();
		pcbPagoRecConceptoFzble.setValidEmpty();
		pcbPagoRecConceptoFzble.setFieldFind(true);
		pcbPagoRecConceptoFzble.setWidthCombo(140);
		imagesPagoRecIncluir = images.create('imagesPagoRecIncluir','imagesPagoRecIncluir','images/icono_buscar.png');
		imagesPagoRecIncluir.setSize(19,19);
		gridsPagoRecCliente = grids.create('gridsPagoRecCliente',21,18);
		calendarPagoMedfecha = calendars.create('calendarPagoMedfecha');      
		calendarPagoMedfecha.setValidEmpty();
		calendarPagoMedfecha.setCaption('Fecha Pago:',1,84);
		calendarPagoMedfecha.setWidthEditCalendar(128);
		calendarPagoMedfecha.sendToFrom(100);
		editsPagoRecTotMora = edits.create('editsPagoRecTotMora','editsPagoRecTotMora','Mora:',1,40,'normal');
		editsPagoRecTotMora.setValidEmpty();
		editsPagoRecTotMora.readOnly(true);
		editsPagoRecTotDescuento = edits.create('editsPagoRecTotDescuento','editsPagoRecTotDescuento','Descuento:',1,74,'normal');
		editsPagoRecTotDescuento.setValidEmpty();
		editsPagoRecTotDescuento.readOnly(true);
		editsPagoRecTotDivisa = edits.create('editsPagoRecTotDivisa','editsPagoRecTotDivisa','Total $:',1,50,'normal');
		editsPagoRecTotDivisa.setValidEmpty();
		editsPagoRecTotDivisa.readOnly(true);
		editsPagoRecTotPagar = edits.create('editsPagoRecTotPagar','editsPagoRecTotPagar','Total Bs.:',1,60,'normal');
		editsPagoRecTotPagar.setValidEmpty();
		editsPagoRecTotPagar.readOnly(true);
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		hint.addToHintWithRefreshPos(imgButtonsPagoCliCopiar, dialogsPagMedico,"Copiar datos del Estudiante",165,298,false,true);
		hint.addToHintWithRefreshPos(imagesPagoRecIncluir, dialogsPagMedico,"Buscar Concepto",485,280,false,true);
      	imgButtonsPagoFacturar = imgButtons.create('imgButtonsPagoFacturar','Forma de Pago','modopago_1.png');
      	imgButtonsPagoLimpiar = imgButtons.create('imgButtonsPagoLimpiar','Limpiar','limpiar.png');
      	imgButtonsPagoBuscar = imgButtons.create('imgButtonsPagoBuscar','Buscar','icono_buscar.png');
      	imgButtonsPagMedReporte = imgButtons.create('imgButtonsPagMedReporte','Reporte','perfil_1.png');
      	imgButtonsPagMedicoalir = imgButtons.create('imgButtonsPagMedicoalir','Salir','salir.png');
	},

  	init : function() { 
  		this.create();
  		this.dialogsPagMedico_Init();
  		this.gridsPagoDatAlumno_Init();
  		this.gridsPagoRecCliente_Init();
  		this.createMWs(); 
  		this.setEvents();
  	},

  	limpiarFindCliente : function() {
  		editsPagoCliNombre.setValue("");
  		editsPagoCliApellido.setValue(""); 
  		editsPagoCliTelefono.setValue("");
  		editsPagoCliDireccion.setValue("");
  		dialogsPagMedico.setMsg("");
  	},
  	
	limpiarFindAlumno : function(ix) {
		procPagoMedico.clean();
		editsPagoCi.hideId = -1;
  		if (this.pagoRepsActive) 
  		  dialogsPagoReps.close(); 
		//gridsPagoRecCliente.clean();
		gridsPagoDatAlumno.clean();
		pcbPagoCarrera.clear();
  		pcbPagoPeriodo.clear();
		editsPagoCliCi.clear();

		gridsPagoDatMedico.clean();


  		editsPagoCliNombre.clear();
  		editsPagoCliApellido.clear();
  		editsPagoCliTelefono.clear();
  		//editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
  		editsPagoCliDireccion.clear();
  		/*editsPagoRecTotMora.clear();
  		editsPagoRecTotDescuento.clear();
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();*/
  		editsPagoRecConcepto.clear();
  		pcbPagoRecConceptoFzble.clear();
  		dialogsPagMedico.setMsg("");

  		switch (ix) {
		case 1: 
			editsPagoNombre.setValue("");
			editsPagoApellido.setValue("");  		
			break;
		case 2: 
			editsPagoCi.setValue("");
			editsPagoApellido.setValue("");  		
			break;
		default:
			editsPagoCi.setValue("");
			editsPagoNombre.setValue("");
			break;
		} 
  	},
  	
  	copiarCliente : function() {
  		editsPagoCliCi.setValue(editsPagoCi.getValue());
  		this.buscar();
  	},

  	callWinCalcMonto : function() {
		if (editsPagoCi.valid(dialogsPagMedico))
			if (editsPagoNombre.valid(dialogsPagMedico))
				if (editsPagoApellido.valid(dialogsPagMedico)) {
					if (pcbPagoRecConceptoFzble.valid(dialogsPagMedico)) 
						CalcMontos.show();
				}
				else {
					pcbPagoRecConceptoFzble.setSelectedIndex(0);
				}
	}, 
	
  	setData : function() {
		if (gridsPagoDatAlumno.getDataCell(1) != "") {
			this.facturar(gridsPagoDatAlumno.getDataCell(1),
	  					  gridsPagoDatAlumno.getDataCell(2),
	  					  gridsPagoDatAlumno.getDataCell(3),
	  					  (procPagMedico.getDivisa() * (parseFloat(gridsPagoDatAlumno.getDataCell(4),10)-parseFloat(gridsPagoDatAlumno.getDataCell(3),10))).toFixed(2),
	  					  gridsPagoDatAlumno.getDataCell(5),
	  					  gridsPagoDatAlumno.getDataCell(6),
	  					  gridsPagoDatAlumno.getDataCell(7),
	  					  gridsPagoDatAlumno.getDataCell(8),
	  					  gridsPagoDatAlumno.getDataCell(9),
	  					  gridsPagoDatAlumno.getDataCell(10),
	  					  gridsPagoDatAlumno.getDataCell(11),
	  					  gridsPagoDatAlumno.getDataCell(12),
	  					  gridsPagoDatAlumno.getDataCell(13),
	  					  gridsPagoDatAlumno.getDataCell(14),
	  					  gridsPagoDatAlumno.getDataCell(15),
	  					  gridsPagoDatAlumno.getDataCell(16),
	  					  "NO",
	  					  false);
	  		gridsPagoDatAlumno.cleanRow();
	  		editsPagoCliCi.setFocus();
	  	}
	},

	facturar : function(cedAlumno, concep, abono, monto, feEmi, feVenc, periodo, idCuot_idCred, idPer, poMora, poDesc, tiDato, idConcep, 
		                idPersAlumno, idCarrera, esCondInsc, idRubro, stspp) {                	
  		
  		var item = gridsPagoRecCliente.getTotalRecord() + 1;
  		//ACTUALIZACION DE TOTALES
  		if(!stspp){
  		  if(isProntoPago(feVenc) && parseFloat(abono)==0){
  		    procPagMedico.actualizaTotalesPagMedico(monto, poDesc, procPagMedico.ADD_PAGO);//descuento por pronto pago a credito
  		    dialogsPagMedico.setMsg('El item '+item+' tiene descuento por pronto pago');
  		  }
  		  else{
  		    procPagMedico.actualizaTotalesPagMedico(monto, 0, procPagMedico.ADD_PAGO);//no tiene pronto pago
  		    dialogsPagMedico.setMsg('El item '+item+' no tiene descuento por pronto pago');
  		    poDesc=0;
  		  }
  		  if(isVenc(feVenc) && parseFloat(abono)==0){
  		    procPagMedico.actualizaMora(monto, poMora, procPagMedico.ADD_MORA);
  		    dialogsPagMedico.setMsg('El item '+item+' posee atraso de pago');
  		  }  
  		}
  		else{
  		  procPagMedico.actualizaTotalesPagMedico(monto, poDesc, procPagMedico.ADD_PAGO);//descuento por pronto pago de contado
  		  dialogsPagMedico.setMsg('tiene descuento por pronto pago');
  	   	}
  	   	gridsPagoRecCliente.addData([item,
  		                             cedAlumno,
  		                             concep, 
  		                             feEmi, 
  		                             ''+parseFloat(monto).toFixed(2), 
  		                             poMora, 
  		                             poDesc, 
  		                             idConcep, 
  		                             abono, 
  		                             feVenc, 
  		                             idPer, 
  		                             periodo, 
  		                             idCuot_idCred, 
  		                             tiDato, 
  		                             idPersAlumno,
  		                             idCarrera,
  		                             esCondInsc,
  		                             idRubro]);
  		imgButtonsPagoFacturar.setEnable();
  	},
  	
  	//Al hacer click en el grid de conceptos
  	setDataEdits : function() {
  		this.actRowCli = gridsPagoRecCliente.getRowCell();
  		gridsPagoRecCliente.selectedRow(this.actRowCli);
  		if(gridsPagoRecCliente.getDataCell(14) != "") {
  			gridsPagoDatAlumno.addData([gridsPagoRecCliente.getDataCell(2),
  			                            gridsPagoRecCliente.getDataCell(3),
  			                            gridsPagoRecCliente.getDataCell(9),
  			                            (parseFloat(gridsPagoRecCliente.getDataCell(5),10)+parseFloat(gridsPagoRecCliente.getDataCell(9),10)).toFixed(2) / procPagMedico.getDivisa(),
  			                            gridsPagoRecCliente.getDataCell(4),
  			                            gridsPagoRecCliente.getDataCell(10), 
  			                            gridsPagoRecCliente.getDataCell(12), 
  			                            gridsPagoRecCliente.getDataCell(13), 
  			                            gridsPagoRecCliente.getDataCell(11), 
  			                            gridsPagoRecCliente.getDataCell(6), 
  			                            gridsPagoRecCliente.getDataCell(7), 
  			                            gridsPagoRecCliente.getDataCell(14), 
  			                            gridsPagoRecCliente.getDataCell(8),
  			                            gridsPagoRecCliente.getDataCell(15),
  			                            gridsPagoRecCliente.getDataCell(16)]); 
  		} 
  		this.eliminaConceptoGrid();
  	},
  	
  	eliminaConceptoGrid : function() {
  		procPagMedico.actualizaTotalesPagMedico(gridsPagoRecCliente.getDataCell(5), gridsPagoRecCliente.getDataCell(7), procPagMedico.REMOVE_PAGO); 
  		procPagMedico.actualizaMora(gridsPagoRecCliente.getDataCell(5), gridsPagoRecCliente.getDataCell(6), procPagMedico.DEC_MORA);
  		gridsPagoRecCliente.cleanRow();
  		gridsPagoRecCliente.firstPage();
  		for(var i=1; i<=gridsPagoRecCliente.getTotalRecord(); i++) {  
  			gridsPagoRecCliente.setDataCell(i,1,i);  
  		}
  		if (gridsPagoRecCliente.getTotalRecord() == 0) {
  			imgButtonsPagoFacturar.setDisable();
  			procPagMedico.clean();
  	   }
  	},
  	
  	closeWinsPagMedico : function() {
  		if (this.pagoRepsActive) dialogsPagoReps.close(); 
  	  	dialogsPagMedico.close();
  		this.pagoRepsActive = false;
  	},

  	limitDate : function() {
		var limit = calendarPagoMedfecha.compare(calendarPagoMedfecha.getYear(), calendarPagoMedfecha.getIntMonth(), calendarPagoMedfecha.getDay(), Tool.getDate().split('-')[2], Tool.getDate().split('-')[1], Tool.getDate().split('-')[0]); 
	  	
	  	if (limit == 1) {
			Alert.show('LA FECHA NO PUEDE SER MAYOR AL DIA ACTUAL', 'SISTEMA', Alert.TYPE_INFO);
			calendarPagoMedfecha.setFechaToEdit(Tool.getDate());
		}
		return limit;
	},

  	callWinFormaPago : function() {
		if (editsPagoCliCi.valid(dialogsPagMedico))
			if (editsPagoCliNombre.valid(dialogsPagMedico))
				if (editsPagoCliApellido.valid(dialogsPagMedico))
					if (editsPagoCliTelefono.valid(dialogsPagMedico))
						if (editsPagoCliDireccion.valid(dialogsPagMedico))
							if (this.limitDate() != 1) {
								FormPago.show();
							}
  	},

	loadDataInit: function() {
		calendarPagoMedfecha.setDisable();
    	if (json('getPermiso').data[0] == 'ACTIVO')
    		calendarPagoMedfecha.setEnable();
    		
		//editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
        procPagMedico.setDivisa(json('getDivisa').data[0]);
		dialogsPagMedico.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
        editsPagoCi.setFocus();
    },

  	limpiar : function(callSrv) {
  		editsPagoCi.hideId = -1;
  		editsPagoRecConcepto.clear();
  		pcbPagoRecConceptoFzble.clear();
  		editsPagoCi.clear();
  		editsPagoNombre.clear();
  		editsPagoApellido.clear();
  		pcbPagoCarrera.clear();
  		pcbPagoPeriodo.clear();
  		gridsPagoDatAlumno.clean();
		procPagoMedico.clean();
  		editsPagoCliCi.clear();
  		editsPagoCliNombre.clear();
  		editsPagoCliApellido.clear();
  		editsPagoCliTelefono.clear();
  		editsPagoCliDireccion.clear();
  		gridsPagoRecCliente.clean();
		calendarPagoMedfecha.clear();
		calendarPagoMedfecha.setFechaToEdit(Tool.getDate());
  		editsPagoRecTotMora.clear();
  		editsPagoRecTotDescuento.clear();
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();
		dialogsPagMedico.addObject(gridsPagoRecConcepto,-1000,-1000);
  		gridsPagoRecConcepto.clean();

		gridsPagoDatMedico.clean();
		  

  		dialogsPagMedico.setMsg("");
  		if (!callSrv || callSrv == undefined) {
  			//Tool.cnnSrv('MantObject', 'getPagMedicoConcepto', this.windowName + '.loadDataInit()');
  		}
  	},

  	getDataGridCuota : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.addInt('reg', editsPagoCi.hideId);
		rlx.add('reg', pcbPagoRecConceptoFzble.setModeReturnGetText(0));
		rlx.add('reg', pcbPagoRecConceptoFzble.setModeReturnGetText(0));
  		Tool.cnnSrv("MantObject", "getCreditoCuotaAlumno", this.windowName + ".loadDataGridCuota()", rlx);
  	},
  	
  	loadDataGridCuota : function() {
  		Tool.loadGridData(dialogsPagMedico, gridsPagoDatAlumno, false, json('getCreditoCuotaAlumno'));    
  		Tool.loadPowerComboData(dialogsPagMedico, pcbPagoPeriodo, -1, 1, json('getPeriodoVigente'));
		pcbPagoPeriodo.setSelectedIndex(1);
		this.copiarCliente();
  	},
  	
  	getDatoCliente : function() {
		var rlx = xmlStructs.createRecordList("rlx");
		rlx.add('reg', editsPagoCliCi);
		rlx.add('reg', editsPagoCliCi);
		rlx.add('reg', editsPagoCliCi);
		rlx.add('reg', editsPagoCliNombre);
		rlx.add('reg', editsPagoCliNombre);
		rlx.add('reg', editsPagoCliApellido);
		rlx.add('reg', editsPagoCliApellido);
  		Tool.cnnSrv('MantObject', 'getDatoCliente', this.windowName + '.loadDatoCliente()', rlx);
  	},
  	
  	loadDatoCliente : function() {
  		editsPagoCliCi.setValue(json("getDatoCliente").data[0][0]);
  		editsPagoCliNombre.setValue(json("getDatoCliente").data[1][0]);
  		editsPagoCliApellido.setValue(json("getDatoCliente").data[2][0]); 
  		editsPagoCliTelefono.setValue(json("getDatoCliente").data[3][0]);
  		editsPagoCliDireccion.setValue(json("getDatoCliente").data[4][0]);
  		editsPagoRecConcepto.setFocus();
  	},

  	getCarrera : function() {
		var rlx = xmlStructs.createRecordList("rlx");
  		
		rlx.addInt('reg', editsPagoCi.hideId);
		Tool.cnnSrv('MantObject', 'getCarreraAlumno', this.windowName + '.loadDataCarrera()', rlx);
  	},

  	loadDataCarrera : function() {
		Tool.loadPowerComboData(dialogsPagMedico, pcbPagoCarrera, -1, 1, json('getCarreraAlumno'));
		pcbPagoCarrera.setSelectedIndex(1); 
  		this.getDataGridCuota();
  	},

  	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (editsPagoCi.getValue() != '' && editsPagoNombre.getValue() != '' && editsPagoApellido.getValue() != '') {
			this.getDatoCliente();
		}
		else if (editsPagoCi.getValue() != '' || editsPagoNombre.getValue() != '' || editsPagoApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsPagoCi, editsPagoNombre, editsPagoApellido, "PagMedico.getDataGridCuota()");
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsPagoCi, editsPagoCi, editsPagoNombre, editsPagoNombre, editsPagoApellido, editsPagoApellido);
		}
		else {
			Alert.show('Ingrese datos del Estudiante: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
			editsPagoCi.valid(dialogsPagMedico);
			editsPagoNombre.valid(dialogsPagMedico);
			editsPagoApellido.valid(dialogsPagMedico); 
		}
   	},
	
	setEvents : function() {
  		editsPagoCi.onEnter(this.windowName + ".buscar()");
  		editsPagoCi.onChange(this.windowName + ".limpiarFindAlumno(1)");
  		editsPagoCi.onClick(this.windowName + ".limpiarFindAlumno(1)");
  		editsPagoNombre.onEnter(this.windowName + ".buscar()");
  		editsPagoNombre.onChange(this.windowName + ".limpiarFindAlumno(2)");
  		editsPagoNombre.onClick(this.windowName + ".limpiarFindAlumno(2)");
  		editsPagoApellido.onEnter(this.windowName + ".buscar()");
  		editsPagoApellido.onChange(this.windowName + ".limpiarFindAlumno(3)");
  		editsPagoApellido.onClick(this.windowName + ".limpiarFindAlumno(3)");
  		pcbPagoCarrera.onChange(this.windowName + ".getDataGridCuota()");
  		//pcbPagoPeriodo.onChange(this.windowName + ".getDataConceptoSinPago()");
  		gridsPagoDatAlumno.onClickCells(this.windowName + ".setData()");
  		editsPagoCliCi.onEnter(this.windowName + ".buscar()");
  		editsPagoCliCi.onChange(this.windowName + ".limpiarFindCliente()");
  		editsPagoCliNombre.onEnter(this.windowName + ".buscar()");
  		editsPagoCliApellido.onEnter(this.windowName + ".buscar()");
  		pcbPagoRecConceptoFzble.onChange(this.windowName + ".callWinCalcMonto()");
  		imagesPagoRecIncluir.onClick(this.windowName + ".getDataConceptoSinPago()");
  		gridsPagoRecCliente.onClickCells(this.windowName + ".setDataEdits()");
  		imgButtonsPagoFacturar.onClick(this.windowName + ".callWinFormaPago()");
  		imgButtonsPagoLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsPagoBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsPagMedReporte.onClick("PagoReps.show()");
  		imgButtonsPagMedicoalir.onClick(this.windowName + ".closeWinsPagMedico()");
  		dialogsPagMedico.onClickCloseDialog(this.windowName + ".closeWinsPagMedico()");
  		calendarPagoMedfecha.onSelectedDay(this.windowName + ".limitDate()");
  		editsPagoRecConcepto.onEnter(this.windowName + ".getDataConceptoSinPago()");
  		editsPagoRecConcepto.onClick("dialogsPagMedico.addObject(gridsPagoRecConcepto,-1000,-1000);gridsPagoRecConcepto.clean();");
		gridsPagoRecConcepto.onClickCells(this.windowName+".incluirConcepto()");
  	},

	getDataConceptoSinPago : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		gridsPagoRecConcepto.clean();
		dialogsPagMedico.addObject(gridsPagoRecConcepto,-1000,-1000);
  		pcbPagoRecConceptoFzble.clear();
		if (editsPagoCi.valid(dialogsPagMedico))
			if (editsPagoNombre.valid(dialogsPagMedico))
				if (editsPagoApellido.valid(dialogsPagMedico)) {
		  			procPagMedico.setYear(pcbPagoPeriodo.setModeReturnGetText(2).getText().substr(0,4));
			  		rlx.addInt('reg', editsPagoCi.hideId);
			  		rlx.add('reg', pcbPagoPeriodo.setModeReturnGetText(0));
			  		rlx.add('reg', editsPagoRecConcepto);
			  		Tool.cnnSrv("MantObject", "getConceptoSinPago", this.windowName + ".loadDataConceptoSinPago()", rlx);
				}
  	},
  	
  	loadDataConceptoSinPago : function() {
  		Tool.loadPowerComboData(dialogsPagMedico, pcbPagoRecConceptoFzble, -1, 1, json('getPagMedicoConceptoFzble'));
		pcbPagoRecConceptoFzble.setSizeHeight(275);

    	this.gridsPagoRecConcepto_Init(json('getPagMedicoConcepto').data[0].length);
		dialogsPagMedico.addObject(gridsPagoRecConcepto,20,18);
		gridsPagoRecConcepto.onClickCells(this.windowName+".incluirConcepto()");
    	gridsPagoRecConcepto.clean();    		
    	Tool.loadGridData(dialogsPagMedico, gridsPagoRecConcepto, gridsPagoRecConcepto.setFocus(), json('getPagMedicoConcepto'));
  	},
        
    incluirConcepto : function() {
		if (editsPagoCi.valid(dialogsPagMedico)) 
			if (gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 0) != "") {	
				this.facturar(
					//cedAlumno 
					editsPagoCi.getText(),
					//nombre concepto
					gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 0), 
					//abono
					0.0, 
					//monto
					parseFloat(gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 8),10) * procPagMedico.getDivisa(),
					//feEmi
					'', 
					//feVenc
					'', 
					//periodo
					'', 
					//idCuot_idCred
					0, 
					//idPer
					pcbPagoPeriodo.setModeReturnGetText(0).getText(), 
					//poMora
					0.0, 
					//poDesc 
					0.0, 
					//tiDato
					'',
					//idConcep  
					gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 3),
					//idPersAlumno
					editsPagoCi.hideId,
					//idCarrera 
					gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 15),
					//esCondInsc
					gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 12),
					//idRubro
					gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 13),
					//stspp
					false);
				gridsPagoRecConcepto.clean();
				dialogsPagMedico.addObject(gridsPagoRecConcepto,-1000,-1000);
				editsPagoRecConcepto.clear();
				editsPagoRecConcepto.setFocus();
		}  			
  	}
};