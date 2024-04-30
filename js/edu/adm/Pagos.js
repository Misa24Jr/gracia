var dialogsPagos = {};
var editsPagoCi = {};
var editsPagoNombre = {};
var editsPagoApellido = {}; 
var pcbPagoCarrera = {};
var pcbPagoPeriodo = {};
var gridsPagoDatAlumno = {};
var editsPagoCliCi = {};
var imgButtonsPagoCliCopiar = {};
var editsPagoCliNombre = {};
var editsPagoCliApellido = {}; 
var editsPagoCliTelefono = {};
var editsPagoCliDireccion = {};
//var pcbPagoRecConcepto = {};
var editsPagoRecConcepto ={};
var pcbPagoRecConceptoFzble = {};
var imagesPagoRecIncluir = {};
var gridsPagoRecCliente = {};
var calendarPagoDocfecha = {};
var editsPagoRecTotMora = {};
var editsPagoRecTotDescuento = {};
var editsPagoRecTotDivisa = {};
var editsPagoRecTotPagar = {};
var imgButtonsPagoFacturar = {};
var imgButtonsPagoLimpiar = {};
var imgButtonsPagoBuscar = {};
var imgButtonsPagoReps = {};
var imgButtonsPagoSalir = {};
var imgButtonsPagoCtaCobrar = {};
var gridsPagoRecConcepto = {};
var mwPagos = {};// minWindow
var procPagos = new ProcPagos();

var Pagos = {
	windowName : 'Pagos',
	isCreate : false,
	actRowCli : 1,
	pagoRepsActive : false,
	calcMontoActive : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsPagos.isByClean())
 			this.limpiar();			
		dialogsPagos.show();
	},
	
	hide : function() {
		dialogsPagos.hide();
	},
	
	createMWs : function() {
		mwPagos  = desktop.addMinWindow('Facturar', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsPagos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsPagos_Init : function() {
        dialogsPagos.setMinimizeXY(0,0);
        dialogsPagos.setCenterScreen();
        dialogsPagos.addSpace(0,0,20);
        dialogsPagos.addLn(1,1,1);
		dialogsPagos.setHeightCell(1,1,0);
		var c1 = container.create("c1",'DATOS DEL CLIENTE', 2);
		c1.setDimension(824,193);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 10, '#1e1e1e');
		c1.addObject(editsPagoCi, 41, 40);
		c1.addObject(editsPagoNombre, 309, 40);
		c1.addObject(editsPagoApellido, 575, 40);
		//c1.addObject(pcbPagoCarrera, 41, 85);
		//c1.addObject(pcbPagoPeriodo, 575, 85);
		c1.addObject(gridsPagoDatAlumno.getObject(), 40,70);	
		dialogsPagos.addObjToDialog(c1, 2, 1);
      	dialogsPagos.addLn(3, 1, 1);
		dialogsPagos.setHeightCell(3,1,20);
      	var c2 = container.create("c2",'DATOS DE LA FACTURA', 2);
		c2.setDimension(824,337);
		c2.setMarginLeftBarTitle(20);
		c2.setPropertyMarco('groove',1,'#7e7e7e');
		c2.setFontTitle('verdana',10, '#1e1e1e');
		c2.addObject(editsPagoCliCi, 41, 252);
		//c2.addObject(imgButtonsPagoCliCopiar, 264, 272);
        //imgButtonsPagoCliCopiar.setDimension(16,17);
        c2.addObject(editsPagoCliNombre, 300, 252);
		c2.addObject(editsPagoCliApellido, 575, 252);
		c2.addObject(editsPagoCliTelefono, 41, 279);
		editsPagoCliTelefono.setSizeEdit(149);
		c2.addObject(editsPagoCliDireccion, 300, 279);
		editsPagoCliDireccion.setSizeEdit(426);
		c2.addObject(editsPagoRecConcepto, 41, 304);
		//c2.addObject(pcbPagoRecConcepto, 41, 304);
		c2.addObject(imagesPagoRecIncluir, 655,304);
		//c2.addObject(pcbPagoRecConceptoFzble, 575, 304);
		c2.addObject(imgButtonsPagoCtaCobrar, 692, 304);
		c2.addObject(gridsPagoRecCliente.getObject(), 40,340);
		c2.addObject(calendarPagoDocfecha, 41, 542);
		c2.addObject(editsPagoRecTotMora, 217, 542);
        editsPagoRecTotMora.setSizeEdit(100);
        c2.addObject(editsPagoRecTotDescuento, 368, 542);
        editsPagoRecTotDescuento.setSizeEdit(100);
        c2.addObject(editsPagoRecTotDivisa, 554, 542);
        editsPagoRecTotDivisa.setSizeEdit(100);
       	c2.addObject(editsPagoRecTotPagar, 683, 542);
        editsPagoRecTotPagar.setSizeEdit(100);
      	dialogsPagos.addObjToDialog(c2, 4, 1);      	
		dialogsPagos.addLn(5, 1, 1);
		dialogsPagos.setHeightCell(5,1,15); 
      	dialogsPagos.addObjToDialog(imgButtonsPagoFacturar,6,1);
		dialogsPagos.addObjToDialog(imgButtonsPagoLimpiar,6,1);
        dialogsPagos.addObjToDialog(imgButtonsPagoBuscar,6,1);
        //dialogsPagos.addObjToDialog(imgButtonsPagoReps,6,1);
        dialogsPagos.addObjToDialog(imgButtonsPagoSalir,6,1);
      	dialogsPagos.adjAllMarginObj(6,1,30);
        dialogsPagos.leftMarginObj(6,1,0,110);
        procPagos.setEdits(editsPagoRecTotMora, editsPagoRecTotDescuento, editsPagoRecTotPagar, editsPagoRecTotDivisa);
	},

	gridsPagoDatAlumno_Init : function()  {
        gridsPagoDatAlumno.setFixColRow(false,true);
        gridsPagoDatAlumno.addTitleVectorX(['Cedula','Cuenta x Cobrar (Deuda)','Abono','Monto','Mes','F. Vencimiento','Año Fiscal','idCuota/idCredito',
                                            'idPeriodo','poMora','poDescuento','tiDato','idConcepto','idPersAlumno','idCarrera','esCondInsc']);
        gridsPagoDatAlumno.showData();  
        gridsPagoDatAlumno.setSizeCol(1,0);      
        gridsPagoDatAlumno.setSizeCol(2,308);
        gridsPagoDatAlumno.setSizeCol(3,70);
        gridsPagoDatAlumno.setSizeCol(4,70);
        gridsPagoDatAlumno.setSizeCol(5,90);
        gridsPagoDatAlumno.setSizeCol(6,110);
        gridsPagoDatAlumno.setSizeCol(7,130);
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
  	
	gridsPagoRecCliente_Init : function()  {
        gridsPagoRecCliente.setFixColRow(false,true);
        gridsPagoRecCliente.addTitleVectorX(['N°','Cedula','Descripción Factura','Mes','Monto','poMora','poDescuento','idConcepto',
        'abono','Fecha Vencimiento','idPeriodo','periodo','idCuota/idCredito','tiDato','idPersAlumno','idCarrera','esCondInsc','idRubro']);
        gridsPagoRecCliente.showData();        
        gridsPagoRecCliente.setSizeCol(1,50);//nro.
        gridsPagoRecCliente.setSizeCol(2,110);//cedula
        gridsPagoRecCliente.setSizeCol(3,408);//concepto
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
		gridsPagoRecConcepto.addTitleVectorX(['Concepto','Especialista','idpersona','4','5','6','7','8','9','10','11','12','13','14','15','']);
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
		dialogsPagos = dialogs.create('dialogsPagos',0,0,865,591,'FACTURAR');
		dialogsPagos.setAdjY(40);
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
		pcbPagoPeriodo = powerComboBox.create('pcbPagoPeriodo', 'pcbPagoPeriodo', 'Año Fiscal (*):', 1,96);
		pcbPagoPeriodo.setWidthCombo(142);
		pcbPagoPeriodo.enableReadOnlyEditor();
		pcbPagoPeriodo.addEmptyOption();
		pcbPagoPeriodo.setValidEmpty();
		gridsPagoDatAlumno = grids.create('gridsPagoDatAlumno',5,16);
		editsPagoCliCi = edits.create('editsPagoCliCi','editsPagoCliCi','C.i./Rif. (*):',1,68,'normal');
		editsPagoCliCi.setValidEmpty();
		editsPagoCliCi.setFieldFind(true);
		editsPagoCliCi.setSizeEdit(149);
		//imgButtonsPagoCliCopiar = imgButtons.create('imgButtonsPagoCliCopiar','','copy_1.png');
		editsPagoCliNombre = edits.create('editsPagoCliNombre','editsPagoCliNombre','Nombre (*):',1,98,'normal');
		editsPagoCliNombre.setValidEmpty();
		editsPagoCliNombre.setFieldFind(true);
		editsPagoCliNombre.setSizeEdit(149);
		editsPagoCliApellido = edits.create('editsPagoCliApellido','editsPagoCliApellido','Apellido (*):',1,100,'normal');
		editsPagoCliApellido.setValidEmpty();
		editsPagoCliApellido.setFieldFind(true);
		editsPagoCliApellido.setSizeEdit(149);
		editsPagoCliTelefono = edits.create('editsPagoCliTelefono','editsPagoCliTelefono','Teléfono:',1,68,'normal');
		editsPagoCliTelefono.setValidEmpty();
		editsPagoCliDireccion = edits.create('editsPagoCliDireccion','editsPagoCliDireccion','Dirección:',1,98,'normal');
		editsPagoCliDireccion.setValidEmpty(); 
/*		pcbPagoRecConcepto = powerComboBox.create('pcbPagoRecConcepto', 'pcbPagoRecConcepto', 'Concepto:', 1,64);
		pcbPagoRecConcepto.enableReadOnlyEditor();
		pcbPagoRecConcepto.addEmptyOption();
		pcbPagoRecConcepto.setValidEmpty();
		pcbPagoRecConcepto.setTypeObjOpt('input', 'checkbox');
		pcbPagoRecConcepto.setFirstRowCheckMode(2);		
		pcbPagoRecConcepto.setWidthCombo(416);*/
		editsPagoRecConcepto = edits.create('editsPagoRecConcepto','editsPagoRecConcepto','Concepto (*):',1,100,'normal');
		editsPagoRecConcepto.setValidEmpty();
		editsPagoRecConcepto.setFieldFind(true);
		editsPagoRecConcepto.setSizeEdit(526);
		pcbPagoRecConceptoFzble = powerComboBox.create('pcbPagoRecConceptoFzble', 'pcbPagoRecConceptoFzble', 'Cuenta x Cobrar:', 1,95);
		pcbPagoRecConceptoFzble.enableReadOnlyEditor();
		pcbPagoRecConceptoFzble.addEmptyOption();
		pcbPagoRecConceptoFzble.setValidEmpty();
		pcbPagoRecConceptoFzble.setFieldFind(true);
		pcbPagoRecConceptoFzble.setWidthCombo(140);
		imagesPagoRecIncluir = images.create('imagesPagoRecIncluir','imagesPagoRecIncluir','images/icono_buscar.png');
		imagesPagoRecIncluir.setSize(19,19);
		gridsPagoRecCliente = grids.create('gridsPagoRecCliente',8,18);
		calendarPagoDocfecha = calendars.create('calendarPagoDocfecha');      
		calendarPagoDocfecha.setValidEmpty();
		calendarPagoDocfecha.setCaption('Fecha Pago:',1,70);
		calendarPagoDocfecha.setWidthEditCalendar(75);
		calendarPagoDocfecha.sendToFrom(100);
		editsPagoRecTotMora = edits.create('editsPagoRecTotMora','editsPagoRecTotMora','Mora:',1,40,'normal');
		editsPagoRecTotMora.setValidEmpty();
		editsPagoRecTotMora.readOnly(true);
		editsPagoRecTotDescuento = edits.create('editsPagoRecTotDescuento','editsPagoRecTotDescuento','Descuento:',1,74,'normal');
		editsPagoRecTotDescuento.setValidEmpty();
		editsPagoRecTotDescuento.readOnly(true);
		editsPagoRecTotDivisa = edits.create('editsPagoRecTotDivisa','editsPagoRecTotDivisa','$:',1,19,'normal');
		editsPagoRecTotDivisa.setValidEmpty();
		editsPagoRecTotDivisa.readOnly(true);
		editsPagoRecTotPagar = edits.create('editsPagoRecTotPagar','editsPagoRecTotPagar','Total:',1,40,'normal');
		editsPagoRecTotPagar.setValidEmpty();
		editsPagoRecTotPagar.readOnly(true);
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		//hint.addToHintWithRefreshPos(imgButtonsPagoCliCopiar, dialogsPagos,"Copiar datos del Estudiante",165,298,false,true);
		hint.addToHintWithRefreshPos(imagesPagoRecIncluir, dialogsPagos,"BUSCAR CONCEPTO",703,310,false,true);
      	imgButtonsPagoCtaCobrar = imgButtons.create('imgButtonsPagoCtaCobrar','Cuenta x Cobrar','modopago_1.png');
      	imgButtonsPagoFacturar = imgButtons.create('imgButtonsPagoFacturar','Forma de Pago','modopago_1.png');
      	imgButtonsPagoLimpiar = imgButtons.create('imgButtonsPagoLimpiar','Limpiar','limpiar.png');
      	imgButtonsPagoBuscar = imgButtons.create('imgButtonsPagoBuscar','Buscar','icono_buscar.png');
      	imgButtonsPagoReps = imgButtons.create('imgButtonsPagoReps','Representante','perfil_1.png');
      	imgButtonsPagoSalir = imgButtons.create('imgButtonsPagoSalir','Salir','salir.png');
      	imgButtonsPagoCtaCobrar.setDimension(130,22);        
      	imgButtonsPagoFacturar.setDimension(130,22);        
        imgButtonsPagoLimpiar.setDimension(130,22);
        imgButtonsPagoBuscar.setDimension(130,22);
        //imgButtonsPagoReps.setDimension(130,22);
        imgButtonsPagoSalir.setDimension(130,22);  
	},

  	init : function() { 
  		this.create();
  		this.dialogsPagos_Init();
  		this.gridsPagoDatAlumno_Init();
  		this.gridsPagoRecCliente_Init();
  		this.createMWs(); 
  		this.setEvents();
  	},

  	limpiarFindCliente : function(ix) {
  		switch (ix) {
		case 1: 
			editsPagoCliNombre.clear();
			editsPagoCliApellido.clear();  		
			break;
		case 2: 
			if (editsPagoCliCi.getValue() == '') {
				editsPagoCliCi.clear();
				editsPagoCliApellido.clear();  		
		  		editsPagoCliTelefono.clear();
		  		editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
		  		editsPagoCliDireccion.clear();
			}
			break;
		default:
			if (editsPagoCliCi.getValue() == '') {
				editsPagoCliCi.clear();
				editsPagoCliNombre.clear();
		  		editsPagoCliTelefono.clear();
		  		editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
		  		editsPagoCliDireccion.clear();
			}
			break;
		} 
  		dialogsPagos.setMsg("");
  	},
  	
	limpiarFindAlumno : function(ix) {
		//procPagos.clean();
		editsPagoCi.hideId = -1;
  		if (this.pagoRepsActive) 
  		  dialogsPagoReps.close(); 
		//gridsPagoRecCliente.clean();
		gridsPagoDatAlumno.clean();
		pcbPagoCarrera.clear();
  		pcbPagoPeriodo.clear();
		editsPagoCliCi.clear();
  		editsPagoCliNombre.clear();
  		editsPagoCliApellido.clear();
  		editsPagoCliTelefono.clear();
  		editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
  		editsPagoCliDireccion.clear();
  		/*editsPagoRecTotMora.clear();
  		editsPagoRecTotDescuento.clear();
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();*/
  		editsPagoRecConcepto.clear();
  		pcbPagoRecConceptoFzble.clear();
  		dialogsPagos.setMsg("");

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
		if (editsPagoCi.valid(dialogsPagos))
			if (editsPagoNombre.valid(dialogsPagos))
				if (editsPagoApellido.valid(dialogsPagos)) {
					CalcMontos.show();
				}
				else {
					editsPagoRecConcepto.clear();
				}
	}, 
	
  	setData : function() {
		if (gridsPagoDatAlumno.getDataCell(1) != "") {
			this.facturar(gridsPagoDatAlumno.getDataCell(1),
	  					  gridsPagoDatAlumno.getDataCell(2),
	  					  gridsPagoDatAlumno.getDataCell(3),
	  					  (procPagos.getDivisa() * (parseFloat(gridsPagoDatAlumno.getDataCell(4),10)-parseFloat(gridsPagoDatAlumno.getDataCell(3),10))).toFixed(2),
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
		                idPersAlumno, idCarrera, esCondInsc, idPersMedico, stspp) {
  		
  		var item = gridsPagoRecCliente.getTotalRecord() + 1;
  		//ACTUALIZACION DE TOTALES
  		if(!stspp){
  		  if(isProntoPago(feVenc) && parseFloat(abono)==0){
  		    procPagos.actualizaTotalesPagos(monto, poDesc, procPagos.ADD_PAGO);//descuento por pronto pago a credito
  		    dialogsPagos.setMsg('El item '+item+' tiene descuento por pronto pago');
  		  }
  		  else{
  		    procPagos.actualizaTotalesPagos(monto, 0, procPagos.ADD_PAGO);//no tiene pronto pago
  		    dialogsPagos.setMsg('El item '+item+' no tiene descuento por pronto pago');
  		    poDesc=0;
  		  }
  		  if(isVenc(feVenc) && parseFloat(abono)==0){
  		    procPagos.actualizaMora(monto, poMora, procPagos.ADD_MORA);
  		    dialogsPagos.setMsg('El item '+item+' posee atraso de pago');
  		  }  
  		}
  		else{
  		  procPagos.actualizaTotalesPagos(monto, poDesc, procPagos.ADD_PAGO);//descuento por pronto pago de contado
  		  dialogsPagos.setMsg('tiene descuento por pronto pago');
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
  		                             idPersMedico]);
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
  			                            (parseFloat(gridsPagoRecCliente.getDataCell(5),10)+parseFloat(gridsPagoRecCliente.getDataCell(9),10)).toFixed(2) / procPagos.getDivisa(),
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
  		procPagos.actualizaTotalesPagos(gridsPagoRecCliente.getDataCell(5), gridsPagoRecCliente.getDataCell(7), procPagos.REMOVE_PAGO); 
  		procPagos.actualizaMora(gridsPagoRecCliente.getDataCell(5), gridsPagoRecCliente.getDataCell(6), procPagos.DEC_MORA);
  		gridsPagoRecCliente.cleanRow();
  		gridsPagoRecCliente.firstPage();
  		for(var i=1; i<=gridsPagoRecCliente.getTotalRecord(); i++) {  
  			gridsPagoRecCliente.setDataCell(i,1,i);  
  		}
  		if (gridsPagoRecCliente.getTotalRecord() == 0) {
  			imgButtonsPagoFacturar.setDisable();
  			procPagos.clean();
  	   }
  	},
  	
  	closeWinsPagos : function() {
  		if (this.pagoRepsActive) dialogsPagoReps.close(); 
  	  	dialogsPagos.close();
  		this.pagoRepsActive = false;
  	},

  	limitDate : function() {
		var limit = calendarPagoDocfecha.compare(calendarPagoDocfecha.getYear(), calendarPagoDocfecha.getIntMonth(), calendarPagoDocfecha.getDay(), Tool.getDate().split('-')[2], Tool.getDate().split('-')[1], Tool.getDate().split('-')[0]); 
	  	
	  	if (limit == 1) {
			Alert.show('LA FECHA NO PUEDE SER MAYOR AL DIA ACTUAL', 'SISTEMA', Alert.TYPE_INFO);
			calendarPagoDocfecha.setFechaToEdit(Tool.getDate());
		}
		return limit;
	},

  	callWinFormaPago : function() {
		if (editsPagoCliCi.valid(dialogsPagos))
			if (editsPagoCliNombre.valid(dialogsPagos))
				if (editsPagoCliApellido.valid(dialogsPagos))
					if (editsPagoCliTelefono.valid(dialogsPagos))
						if (editsPagoCliDireccion.valid(dialogsPagos))
							if (this.limitDate() != 1) {
								FormPago.show();
							}
  	},

	loadDataInit: function() {
		calendarPagoDocfecha.setDisable();
    	if (json('getPermiso').data[0] == 'ACTIVO')
    		calendarPagoDocfecha.setEnable();
    		
		editsPagoCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
        procPagos.setDivisa(json('getDivisa').data[0]);
		dialogsPagos.setMsg(xmlHttpReq.objStsResponse.shortInfo);
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
		procPagos.clean();
  		editsPagoCliCi.clear();
  		editsPagoCliNombre.clear();
  		editsPagoCliApellido.clear();
  		editsPagoCliTelefono.clear();
  		editsPagoCliDireccion.clear();
  		gridsPagoRecCliente.clean();
		calendarPagoDocfecha.clear();
		calendarPagoDocfecha.setFechaToEdit(Tool.getDate());
  		editsPagoRecTotMora.clear();
  		editsPagoRecTotDescuento.clear();
  		editsPagoRecTotPagar.clear();
  		editsPagoRecTotDivisa.clear();
		dialogsPagos.addObject(gridsPagoRecConcepto,-1000,-1000);
  		gridsPagoRecConcepto.clean();
  		dialogsPagos.setMsg("");
  		if (!callSrv || callSrv == undefined) {
  			Tool.cnnSrv('MantObject', 'getPagosConcepto', this.windowName + '.loadDataInit()');
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
  		Tool.loadGridData(dialogsPagos, gridsPagoDatAlumno, false, json('getCreditoCuotaAlumno'));    
  		Tool.loadPowerComboData(dialogsPagos, pcbPagoPeriodo, -1, 1, json('getPeriodoVigente'));
		pcbPagoPeriodo.setSelectedIndex(1);
		this.copiarCliente();
  	},
  	
  	getDatoCliente : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsPagoCliCi.setDataType('string');
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
		Tool.loadPowerComboData(dialogsPagos, pcbPagoCarrera, -1, 1, json('getCarreraAlumno'));
		pcbPagoCarrera.setSelectedIndex(1); 
  		this.getDataGridCuota();
  	},

  	buscar : function() {
		if (editsPagoCi.getValue() != '' && editsPagoNombre.getValue() != '' && editsPagoApellido.getValue() != '') {
			editsPagoCliCi.setDataType('int');
			ResuBusqueda.setObjectExtFnc(editsPagoCliCi, editsPagoCliNombre, editsPagoCliApellido, "Pagos.getDatoCliente()");
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsPagoCliCi, editsPagoCliCi, editsPagoCliNombre, editsPagoCliNombre, editsPagoCliApellido, editsPagoCliApellido);
		}
		else if (editsPagoCi.getValue() != '' || editsPagoNombre.getValue() != '' || editsPagoApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsPagoCi, editsPagoNombre, editsPagoApellido, "Pagos.getDataGridCuota()");
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsPagoCi, editsPagoCi, editsPagoNombre, editsPagoNombre, editsPagoApellido, editsPagoApellido);
		}
		else {
			Alert.show('Ingrese datos del Estudiante: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
			editsPagoCi.valid(dialogsPagos);
			editsPagoNombre.valid(dialogsPagos);
			editsPagoApellido.valid(dialogsPagos); 
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
  		editsPagoCliCi.onChange(this.windowName + ".limpiarFindCliente(1)");
  		editsPagoCliCi.onClick(this.windowName + ".limpiarFindCliente(1)");
  		editsPagoCliNombre.onEnter(this.windowName + ".buscar()");
  		editsPagoCliNombre.onChange(this.windowName + ".limpiarFindCliente(2)");
  		editsPagoCliNombre.onClick(this.windowName + ".limpiarFindCliente(2)");
  		editsPagoCliApellido.onEnter(this.windowName + ".buscar()");
  		editsPagoCliApellido.onChange(this.windowName + ".limpiarFindCliente(3)");
  		editsPagoCliApellido.onClick(this.windowName + ".limpiarFindCliente(3)");
  		//pcbPagoRecConceptoFzble.onChange(this.windowName + ".callWinCalcMonto()");
  		imagesPagoRecIncluir.onClick(this.windowName + ".getDataConceptoSinPago(false)");
  		gridsPagoRecCliente.onClickCells(this.windowName + ".setDataEdits()");
  		imgButtonsPagoCtaCobrar.onClick(this.windowName + ".getDataConceptoSinPago(true)");
  		imgButtonsPagoFacturar.onClick(this.windowName + ".callWinFormaPago()");
  		imgButtonsPagoLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsPagoBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsPagoReps.onClick("PagoReps.show()");
  		imgButtonsPagoSalir.onClick(this.windowName + ".closeWinsPagos()");
  		dialogsPagos.onClickCloseDialog(this.windowName + ".closeWinsPagos()");
  		calendarPagoDocfecha.onSelectedDay(this.windowName + ".limitDate()");
  		editsPagoRecConcepto.onEnter(this.windowName + ".getDataConceptoSinPago()");
  		editsPagoRecConcepto.onClick("dialogsPagos.addObject(gridsPagoRecConcepto,-1000,-1000);gridsPagoRecConcepto.clean();");
		gridsPagoRecConcepto.onClickCells(this.windowName+".incluirConcepto()");
  	},

	getDataConceptoSinPago : function(ctaCobrar) {
		var rlx = xmlStructs.createRecordList("rlx");

		gridsPagoRecConcepto.clean();
		dialogsPagos.addObject(gridsPagoRecConcepto,-1000,-1000);
  		pcbPagoRecConceptoFzble.clear();
		if (editsPagoCi.valid(dialogsPagos))
			if (editsPagoNombre.valid(dialogsPagos))
				if (editsPagoApellido.valid(dialogsPagos)) {
		  			procPagos.setYear(pcbPagoPeriodo.setModeReturnGetText(2).getText().substr(0,4));
			  		rlx.addInt('reg', editsPagoCi.hideId);
			  		rlx.add('reg', pcbPagoPeriodo.setModeReturnGetText(0));
			  		rlx.add('reg', editsPagoRecConcepto);
			  		rlx.addStr('reg', ctaCobrar);
			  		Tool.cnnSrv("MantObject", "getConceptoSinPago", this.windowName + ".loadDataConceptoSinPago(" + ctaCobrar + ")", rlx);
				}
  	},
  	
  	loadDataConceptoSinPago : function(ctaCobrar) {
		if (!ctaCobrar) {
			this.gridsPagoRecConcepto_Init(json('getPagosConcepto').data[0].length);
			dialogsPagos.addObject(gridsPagoRecConcepto,20,18);
			gridsPagoRecConcepto.onClickCells(this.windowName+".incluirConcepto()");
    		gridsPagoRecConcepto.clean();    		
    		Tool.loadGridData(dialogsPagos, gridsPagoRecConcepto, gridsPagoRecConcepto.setFocus(), json('getPagosConcepto'));
    	}
    	else {
			this.gridsPagoRecConcepto_Init(json('getPagosConceptoFzble').data[0].length);
			dialogsPagos.addObject(gridsPagoRecConcepto,20,18);
			gridsPagoRecConcepto.onClickCells(this.windowName+".callWinCalcMonto()");
    		gridsPagoRecConcepto.clean();    		
    		Tool.loadGridData(dialogsPagos, gridsPagoRecConcepto, gridsPagoRecConcepto.setFocus(), json('getPagosConceptoFzble'));
		}
  	},
        
    incluirConcepto : function() {
		if (editsPagoCi.valid(dialogsPagos)) 
			if (gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 0) != "") {	
				if (gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 14) == "NO") {
					this.facturar(
						//cedAlumno 
						editsPagoCi.getText(),
						//nombre concepto
						gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 0) + ' ' + gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 1), 
						//abono
						0.0, 
						//monto
						parseFloat(gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 8),10) * procPagos.getDivisa(),
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
						//idPersMedica
						gridsPagoRecConcepto.getDataCell(gridsPagoRecConcepto.getActualRow(), 2),
						//stspp
						false);
					gridsPagoRecConcepto.clean();
					dialogsPagos.addObject(gridsPagoRecConcepto,-1000,-1000);
					editsPagoRecConcepto.clear();
					editsPagoRecConcepto.setFocus();
				}
				else {
					CaptValor.show();
					CaptValor.setIndex(i);
				}
		}  			
  	}
};