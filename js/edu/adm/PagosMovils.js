var dialogsPagosMovils             = {};
var editsPagosMovilCi              = {};
var editsPagosMovilNombre          = {};
var editsPagosMovilApellido        = {}; 
var pcbPagosMovilCarrera           = {};
var pcbPagosMovilPeriodo           = {};
var gridsPagosMovilDatAlumno       = {};
var editsPagosMovilCliCi           = {};
var imgButtonsPagosMovilCliCopiar  = {};
var editsPagosMovilCliNombre       = {};
var editsPagosMovilCliApellido     = {}; 
var editsPagosMovilCliTelefono     = {};
var editsPagosMovilCliDireccion    = {};
//var pcbPagosMovilRecConcepto     = {};
var editsPagosMovilRecConcepto      ={};
var pcbPagosMovilRecConceptoFzble  = {};
var imagesPagosMovilRecIncluir     = {};
var imagesPagosMovilCuePorCobrar   = {};
var imagesPagosMovilForPagosMovil        = {};
var imagesPagosMovilBusCliente     = {};
var imagesPagosMovilLimpiar        = {};
var imagesPagosMovilSalir          = {};
var gridsPagosMovilRecCliente      = {};
var calendarPagosMovilDocfecha     = {};
var editsPagosMovilRecTotMora      = {};
var editsPagosMovilRecTotDescuento = {};
var editsPagosMovilRecTotDivisa    = {};
var editsPagosMovilRecTotPagar     = {};
//var imgButtonsPagosMovilFacturar = {};
//var imgButtonsPagosMovilLimpiar  = {};
//var imgButtonsPagosMovilBuscar   = {};
var imgButtonsPagosMovilReps       = {};
//var imgButtonsPagosMovilSalir    = {};
//var imgButtonsPagosMovilCtaCobrar= {};
var gridsPagosMovilRecConcepto     = {};
var mwPagosMovils = {};// minWindow
var procPagos = new ProcPagos();

var PagosMovils = {
	windowName : 'PagosMovils',
	isCreate : false,
	actRowCli : 1,
	PagosMovilRepsActive : false,
	calcMontoActive : false,
	
	show : function() {
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
		if (dialogsPagosMovils.isByClean())
 			this.limpiar();			
		dialogsPagosMovils.show();
	},
	
	hide : function() {
		dialogsPagosMovils.hide();
	},
	
	createMWs : function() {
		mwPagosMovils  = desktop.addMinWindow('Facturar', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
		dialogsPagosMovils .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsPagosMovils_Init : function() {
        dialogsPagosMovils.setMinimizeXY(0,0);
        dialogsPagosMovils.setCenterScreen();	
        dialogsPagosMovils.addSpace(0,0,20);
        dialogsPagosMovils.addLn(1,1,1);
		dialogsPagosMovils.setHeightCell(1,1,0);		
		var c1 = container.create("c1");
		//c1.setDimension(824,193);
		//c1.setMarginLeftBarTitle(20);
		//c1.setPropertyMarco('groove',1,'#7e7e7e');
		//c1.setFontTitle('verdana', 10, '#1e1e1e');
		c1.addObject(editsPagosMovilCi, 20, 40);
		c1.addObject(editsPagosMovilNombre, 20, 70);
		c1.addObject(editsPagosMovilApellido, 20, 100);
		c1.addObject(editsPagosMovilCliTelefono, 20, 130);
		editsPagosMovilCliTelefono.setSizeEdit(183);
		c1.addObject(editsPagosMovilCliDireccion, 20, 160);
		editsPagosMovilCliDireccion.setSizeEdit(183);
		c1.addObject(editsPagosMovilRecConcepto, 20, 190);
		editsPagosMovilRecConcepto.setSizeEdit(183);
		
		c1.addObject(imagesPagosMovilBusCliente, 278,65);
		c1.addObject(imagesPagosMovilRecIncluir, 285,183);		
		c1.addObject(imagesPagosMovilForPagosMovil,37,222);
		c1.addObject(imagesPagosMovilLimpiar, 108,222);
		c1.addObject(imagesPagosMovilCuePorCobrar, 179,222);
		c1.addObject(imagesPagosMovilSalir, 250,222);	

		c1.addObject(gridsPagosMovilRecCliente.getObject(), 0,270);
		//c1.addObject(imgButtonsPagosMovilCtaCobrar, 100, 440);		
		//labelsPagosMovilCliDeudas.setFont('arial','12','Black');	
		c1.addObject(gridsPagosMovilDatAlumno.getObject(), 0,490);	
		//c1.addObject(pcbPagosMovilCarrera, 41, 85);
		//c1.addObject(pcbPagosMovilPeriodo, 575, 85);		
		dialogsPagosMovils.addObjToDialog(c1, 2, 1);
      	/*
		dialogsPagosMovils.addLn(3, 1, 1);
		dialogsPagosMovils.setHeightCell(3,1,20);
      	var c2 = container.create("c2",'DATOS DE LA FACTURA', 2);
		//c2.setDimension(824,337);
		//c2.setMarginLeftBarTitle(20);
		//c2.setPropertyMarco('groove',1,'#7e7e7e');
		//c2.setFontTitle('verdana',10, '#1e1e1e');
		//c2.addObject(editsPagosMovilCliCi, 41, 252);
		//c2.addObject(imgButtonsPagosMovilCliCopiar, 264, 272);
        //imgButtonsPagosMovilCliCopiar.setDimension(16,17);
        c2.addObject(editsPagosMovilCliNombre, 300, 252);
		c2.addObject(editsPagosMovilCliApellido, 575, 252);		
		//c2.addObject(pcbPagosMovilRecConcepto, 41, 304);		
		//c2.addObject(pcbPagosMovilRecConceptoFzble, 575, 304);		
		c2.addObject(calendarPagosMovilDocfecha, 41, 542);
		c2.addObject(editsPagosMovilRecTotMora, 217, 542);
        editsPagosMovilRecTotMora.setSizeEdit(100);
        c2.addObject(editsPagosMovilRecTotDescuento, 368, 542);
        editsPagosMovilRecTotDescuento.setSizeEdit(100);
        c2.addObject(editsPagosMovilRecTotDivisa, 554, 542);
        editsPagosMovilRecTotDivisa.setSizeEdit(100);
       	c2.addObject(editsPagosMovilRecTotPagar, 683, 542);
        editsPagosMovilRecTotPagar.setSizeEdit(100);
      	dialogsPagosMovils.addObjToDialog(c2, 4, 1);      	
		dialogsPagosMovils.addLn(5, 1, 1);
		dialogsPagosMovils.setHeightCell(5,1,15); 
      	dialogsPagosMovils.addObjToDialog(imgButtonsPagosMovilFacturar,6,1);
		dialogsPagosMovils.addObjToDialog(imgButtonsPagosMovilLimpiar,6,1);
        dialogsPagosMovils.addObjToDialog(imgButtonsPagosMovilBuscar,6,1);
        //dialogsPagosMovils.addObjToDialog(imgButtonsPagosMovilReps,6,1);
        dialogsPagosMovils.addObjToDialog(imgButtonsPagosMovilSalir,6,1);
      	dialogsPagosMovils.adjAllMarginObj(6,1,30);
        dialogsPagosMovils.leftMarginObj(6,1,0,110);
        */
		procPagos.setEdits(editsPagosMovilRecTotMora, editsPagosMovilRecTotDescuento, editsPagosMovilRecTotPagar, editsPagosMovilRecTotDivisa);
		
	},

	gridsPagosMovilDatAlumno_Init : function()  {
        gridsPagosMovilDatAlumno.setFixColRow(false,true);
        gridsPagosMovilDatAlumno.addTitleVectorX(['Cedula','Cuentas X Cobrar','Abono','Monto','Mes','F. Vencimiento','Año Fiscal','idCuota/idCredito',
                                            'idPeriodo','poMora','poDescuento','tiDato','idConcepto','idPersAlumno','idCarrera','esCondInsc']);
        gridsPagosMovilDatAlumno.showData();  
        gridsPagosMovilDatAlumno.setSizeCol(1,0);      
        gridsPagosMovilDatAlumno.setSizeCol(2,172);
        gridsPagosMovilDatAlumno.setSizeCol(3,70);
        gridsPagosMovilDatAlumno.setSizeCol(4,70);
        gridsPagosMovilDatAlumno.setSizeCol(5,0);
        gridsPagosMovilDatAlumno.setSizeCol(6,0);
        gridsPagosMovilDatAlumno.setSizeCol(7,0);
        gridsPagosMovilDatAlumno.setSizeCol(8,0);
        gridsPagosMovilDatAlumno.setSizeCol(9,0);
        gridsPagosMovilDatAlumno.setSizeCol(10,0);
        gridsPagosMovilDatAlumno.setSizeCol(11,0);
        gridsPagosMovilDatAlumno.setSizeCol(12,0);
        gridsPagosMovilDatAlumno.setSizeCol(13,0);
        gridsPagosMovilDatAlumno.setSizeCol(14,0);
        gridsPagosMovilDatAlumno.setSizeCol(15,0);
        gridsPagosMovilDatAlumno.setSizeCol(16,0);
        gridsPagosMovilDatAlumno.hideCol(1);		
		gridsPagosMovilDatAlumno.hideCol(5);
		gridsPagosMovilDatAlumno.hideCol(6);
		gridsPagosMovilDatAlumno.hideCol(7);
        gridsPagosMovilDatAlumno.hideCol(8);
        gridsPagosMovilDatAlumno.hideCol(9);
        gridsPagosMovilDatAlumno.hideCol(10);
        gridsPagosMovilDatAlumno.hideCol(11);
        gridsPagosMovilDatAlumno.hideCol(12);
        gridsPagosMovilDatAlumno.hideCol(13);
        gridsPagosMovilDatAlumno.hideCol(14);
        gridsPagosMovilDatAlumno.hideCol(15);
        gridsPagosMovilDatAlumno.hideCol(16);
        gridsPagosMovilDatAlumno.sortEnable();
	},
  	
	gridsPagosMovilRecCliente_Init : function()  {
        gridsPagosMovilRecCliente.setFixColRow(false,true);
        gridsPagosMovilRecCliente.addTitleVectorX(['N°','Cedula','Descripción','Mes','Monto','poMora','poDescuento','idConcepto',
        'abono','Fecha Vencimiento','idPeriodo','periodo','idCuota/idCredito','tiDato','idPersAlumno','idCarrera','esCondInsc','idRubro']);
        gridsPagosMovilRecCliente.showData();        
        gridsPagosMovilRecCliente.setSizeCol(1,20);//nro.
        gridsPagosMovilRecCliente.setSizeCol(2,70);//cedula
        gridsPagosMovilRecCliente.setSizeCol(3,151);//concepto
        gridsPagosMovilRecCliente.setSizeCol(4,110);//mes
        gridsPagosMovilRecCliente.setSizeCol(5,70);//monto
        gridsPagosMovilRecCliente.setSizeCol(6,0);//porcentaje mora
        gridsPagosMovilRecCliente.setSizeCol(7,0);//porcentaje desc.
        gridsPagosMovilRecCliente.setSizeCol(8,0);//id concepto
        gridsPagosMovilRecCliente.setSizeCol(9,0);//abono
        gridsPagosMovilRecCliente.setSizeCol(10,0);//fecha venc.
        gridsPagosMovilRecCliente.setSizeCol(11,0);//idperiodo
        gridsPagosMovilRecCliente.setSizeCol(12,0);//nombre periodo
        gridsPagosMovilRecCliente.setSizeCol(13,0);//id cuota o credito
        gridsPagosMovilRecCliente.setSizeCol(14,0);//indica si es cuota o credito
        gridsPagosMovilRecCliente.setSizeCol(15,0);//id persona alumno
        gridsPagosMovilRecCliente.setSizeCol(16,0);//id carrera
        gridsPagosMovilRecCliente.setSizeCol(17,0);//condiciona inscripcion
        gridsPagosMovilRecCliente.setSizeCol(18,0);//id rubro			
		gridsPagosMovilRecCliente.hideCol(4);
		gridsPagosMovilRecCliente.hideCol(6);
        gridsPagosMovilRecCliente.hideCol(7);
        gridsPagosMovilRecCliente.hideCol(8);
        gridsPagosMovilRecCliente.hideCol(9);
        gridsPagosMovilRecCliente.hideCol(10);
        gridsPagosMovilRecCliente.hideCol(11);
        gridsPagosMovilRecCliente.hideCol(12);
        gridsPagosMovilRecCliente.hideCol(13);
        gridsPagosMovilRecCliente.hideCol(14);
        gridsPagosMovilRecCliente.hideCol(15);
        gridsPagosMovilRecCliente.hideCol(16);
        gridsPagosMovilRecCliente.hideCol(17);
        gridsPagosMovilRecCliente.hideCol(18);
	}, 	 	
	
  	gridsPagosMovilRecConcepto_Init : function(totalRows) {
		gridsPagosMovilRecConcepto = customGrid.create('gridsPagosMovilRecConcepto','',530,315,23,totalRows);
		gridsPagosMovilRecConcepto.loadColumnTypeStruct(null, [customGrid.TYPE_COLUMN_EDIT,
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
														[170,130,0,0,8,0,0,0,0,0,0,0,0,0,0,0]);
		gridsPagosMovilRecConcepto.addTitleVectorX(['Concepto','Especialista','idpersona','4','5','6','7','8','9','10','11','12','13','14','15','']);
		gridsPagosMovilRecConcepto.setSelectedLnMode(0);
//		gridsPagosMovilRecConcepto.addObjToTitle(0, gridsPagosMovilRecConcepto.createTitleObj(0,'input','checkbox'));
//		gridsPagosMovilRecConcepto.activeCheckOnOff(0);
	  	gridsPagosMovilRecConcepto.hideCol(2);
	  	gridsPagosMovilRecConcepto.hideCol(3);
	  	gridsPagosMovilRecConcepto.hideCol(4);
	  	gridsPagosMovilRecConcepto.hideCol(5);
	  	gridsPagosMovilRecConcepto.hideCol(6);
	  	gridsPagosMovilRecConcepto.hideCol(7);
        gridsPagosMovilRecConcepto.hideCol(8);
        gridsPagosMovilRecConcepto.hideCol(9);
	  	gridsPagosMovilRecConcepto.hideCol(10);
	  	gridsPagosMovilRecConcepto.hideCol(11);
	  	gridsPagosMovilRecConcepto.hideCol(12);
	  	gridsPagosMovilRecConcepto.hideCol(13);
	  	gridsPagosMovilRecConcepto.hideCol(14);
	  	gridsPagosMovilRecConcepto.hideCol(15);
		gridsPagosMovilRecConcepto.hideBarTitle();
//		gridsPagosMovilRecConcepto.alignBarTitle('left');
		gridsPagosMovilRecConcepto.hideBarControl();
		for (var i=0; i<15; i++)
			gridsPagosMovilRecConcepto.setReadOnlyCol(i, true);
	},

	create : function() {
		dialogsPagosMovils = dialogs.create('dialogsPagosMovils',0,0,318,550,'FACTURAR');
		dialogsPagosMovils.setAdjY(30);
		this.gridsPagosMovilRecConcepto_Init(11);
		editsPagosMovilCi = edits.create('editsPagosMovilCi','editsPagosMovilCi','C.i. (*):',1,76,'normal');
		editsPagosMovilCi.setValidInteger();
		editsPagosMovilCi.setFieldFind(true);
		editsPagosMovilCi.setSizeEdit(170);
		editsPagosMovilNombre = edits.create('editsPagosMovilNombre','editsPagosMovilNombre','Nombre (*):',1,76,'normal');
		editsPagosMovilNombre.setValidEmpty();
		editsPagosMovilNombre.setFieldFind(true);
		editsPagosMovilNombre.setSizeEdit(170);
		editsPagosMovilApellido = edits.create('editsPagosMovilApellido','editsPagosMovilApellido','Apellido (*):',1,76,'normal');
		editsPagosMovilApellido.setValidEmpty();
		editsPagosMovilApellido.setFieldFind(true);
		editsPagosMovilApellido.setSizeEdit(170);
		pcbPagosMovilCarrera = powerComboBox.create('pcbPagosMovilCarrera', 'pcbPagosMovilCarrera', 'Servicios (*):', 1,76);
		pcbPagosMovilCarrera.setWidthCombo(428);
		pcbPagosMovilCarrera.enableReadOnlyEditor();
		pcbPagosMovilCarrera.addEmptyOption();
		pcbPagosMovilCarrera.setValidEmpty();
		pcbPagosMovilPeriodo = powerComboBox.create('pcbPagosMovilPeriodo', 'pcbPagosMovilPeriodo', 'Año Fiscal (*):', 1,96);
		pcbPagosMovilPeriodo.setWidthCombo(142);
		pcbPagosMovilPeriodo.enableReadOnlyEditor();
		pcbPagosMovilPeriodo.addEmptyOption();
		pcbPagosMovilPeriodo.setValidEmpty();
		gridsPagosMovilDatAlumno = grids.create('gridsPagosMovilDatAlumno',2,16);		
		editsPagosMovilCliCi = edits.create('editsPagosMovilCliCi','editsPagosMovilCliCi','C.i./Rif. (*):',1,68,'normal');
		editsPagosMovilCliCi.setValidEmpty();
		editsPagosMovilCliCi.setFieldFind(true);
		editsPagosMovilCliCi.setSizeEdit(149);
		//imgButtonsPagosMovilCliCopiar = imgButtons.create('imgButtonsPagosMovilCliCopiar','','copy_1.png');
		editsPagosMovilCliNombre = edits.create('editsPagosMovilCliNombre','editsPagosMovilCliNombre','Nombre (*):',1,98,'normal');
		editsPagosMovilCliNombre.setValidEmpty();
		editsPagosMovilCliNombre.setFieldFind(true);
		editsPagosMovilCliNombre.setSizeEdit(149);
		editsPagosMovilCliApellido = edits.create('editsPagosMovilCliApellido','editsPagosMovilCliApellido','Apellido (*):',1,100,'normal');
		editsPagosMovilCliApellido.setValidEmpty();
		editsPagosMovilCliApellido.setFieldFind(true);
		editsPagosMovilCliApellido.setSizeEdit(149);
		editsPagosMovilCliTelefono = edits.create('editsPagosMovilCliTelefono','editsPagosMovilCliTelefono','Teléfono:',1,78,'normal');
		editsPagosMovilCliTelefono.setValidEmpty();
		editsPagosMovilCliDireccion = edits.create('editsPagosMovilCliDireccion','editsPagosMovilCliDireccion','Dirección:',1,78,'normal');
		editsPagosMovilCliDireccion.setValidEmpty(); 
/*		pcbPagosMovilRecConcepto = powerComboBox.create('pcbPagosMovilRecConcepto', 'pcbPagosMovilRecConcepto', 'Concepto:', 1,64);
		pcbPagosMovilRecConcepto.enableReadOnlyEditor();
		pcbPagosMovilRecConcepto.addEmptyOption();
		pcbPagosMovilRecConcepto.setValidEmpty();
		pcbPagosMovilRecConcepto.setTypeObjOpt('input', 'checkbox');
		pcbPagosMovilRecConcepto.setFirstRowCheckMode(2);		
		pcbPagosMovilRecConcepto.setWidthCombo(416);*/
		editsPagosMovilRecConcepto = edits.create('editsPagosMovilRecConcepto','editsPagosMovilRecConcepto','Concepto (*):',1,78,'normal');
		editsPagosMovilRecConcepto.setValidEmpty();
		editsPagosMovilRecConcepto.setFieldFind(true);
		pcbPagosMovilRecConceptoFzble = powerComboBox.create('pcbPagosMovilRecConceptoFzble', 'pcbPagosMovilRecConceptoFzble', 'Cuenta x Cobrar:', 1,95);
		pcbPagosMovilRecConceptoFzble.enableReadOnlyEditor();
		pcbPagosMovilRecConceptoFzble.addEmptyOption();
		pcbPagosMovilRecConceptoFzble.setValidEmpty();
		pcbPagosMovilRecConceptoFzble.setFieldFind(true);
		pcbPagosMovilRecConceptoFzble.setWidthCombo(140);
		
		imagesPagosMovilBusCliente = images.create('imagesPagosMovilBusCliente','imagesPagosMovilBusCliente','images/icono_buscar.png');
		imagesPagosMovilBusCliente.setSize(50,30);
		imagesPagosMovilRecIncluir = images.create('imagesPagosMovilRecIncluir','imagesPagosMovilRecIncluir','images/icono_buscar.png');
		imagesPagosMovilRecIncluir.setSize(25,25);
		imagesPagosMovilLimpiar = images.create('imagesPagosMovilLimpiar','imagesPagosMovilLimpiar','images/limpiar.png');
		imagesPagosMovilLimpiar.setSize(40,40);
		imagesPagosMovilCuePorCobrar = images.create('imagesPagosMovilCuePorCobrar','imagesPagosMovilCuePorCobrar','images/cpcobrar.png');
		imagesPagosMovilCuePorCobrar.setSize(40,40);
		imagesPagosMovilForPagosMovil = images.create('imagesPagosMovilForPagosMovil','imagesPagosMovilForPagosMovil','images/print.png');
		imagesPagosMovilForPagosMovil.setSize(40,40);
		imagesPagosMovilSalir = images.create('imagesPagosMovilSalir','imagesPagosMovilSalir','images/salir.png');
		imagesPagosMovilSalir.setSize(40,40);
		gridsPagosMovilRecCliente = grids.create('gridsPagosMovilRecCliente',8,18);
		calendarPagosMovilDocfecha = calendars.create('calendarPagosMovilDocfecha');      
		calendarPagosMovilDocfecha.setValidEmpty();
		calendarPagosMovilDocfecha.setCaption('Fecha PagosMovil:',1,70);
		calendarPagosMovilDocfecha.setWidthEditCalendar(75);
		calendarPagosMovilDocfecha.sendToFrom(100);
		editsPagosMovilRecTotMora = edits.create('editsPagosMovilRecTotMora','editsPagosMovilRecTotMora','Mora:',1,40,'normal');
		editsPagosMovilRecTotMora.setValidEmpty();
		editsPagosMovilRecTotMora.readOnly(true);
		editsPagosMovilRecTotDescuento = edits.create('editsPagosMovilRecTotDescuento','editsPagosMovilRecTotDescuento','Descuento:',1,74,'normal');
		editsPagosMovilRecTotDescuento.setValidEmpty();
		editsPagosMovilRecTotDescuento.readOnly(true);
		editsPagosMovilRecTotDivisa = edits.create('editsPagosMovilRecTotDivisa','editsPagosMovilRecTotDivisa','$:',1,19,'normal');
		editsPagosMovilRecTotDivisa.setValidEmpty();
		editsPagosMovilRecTotDivisa.readOnly(true);
		editsPagosMovilRecTotPagar = edits.create('editsPagosMovilRecTotPagar','editsPagosMovilRecTotPagar','Total:',1,40,'normal');
		editsPagosMovilRecTotPagar.setValidEmpty();
		editsPagosMovilRecTotPagar.readOnly(true);
		hint.create();
		hint.setObjAttrib(attrib,ambiente);	
		//hint.addToHintWithRefreshPos(imgButtonsPagosMovilCliCopiar, dialogsPagosMovils,"Copiar datos del Estudiante",165,298,false,true);
		hint.addToHintWithRefreshPos(imagesPagosMovilRecIncluir, dialogsPagosMovils,"BUSCAR CONCEPTO",174,180,false,true);
		hint.addToHintWithRefreshPos(imagesPagosMovilCuePorCobrar, dialogsPagosMovils,"CUENTAS X COBRAR",84,216,false,true);
		hint.addToHintWithRefreshPos(imagesPagosMovilForPagosMovil, dialogsPagosMovils,"PAGAR",6,214,false,true);
		/*
      	imgButtonsPagosMovilCtaCobrar = imgButtons.create('imgButtonsPagosMovilCtaCobrar','Cuenta x Cobrar','modoPagosMovil_1.png');
      	imgButtonsPagosMovilFacturar = imgButtons.create('imgButtonsPagosMovilFacturar','Forma de PagosMovil','modoPagosMovil_1.png');
      	imgButtonsPagosMovilLimpiar = imgButtons.create('imgButtonsPagosMovilLimpiar','Limpiar','limpiar.png');
      	imgButtonsPagosMovilBuscar = imgButtons.create('imgButtonsPagosMovilBuscar','Buscar','icono_buscar.png');
      	imgButtonsPagosMovilReps = imgButtons.create('imgButtonsPagosMovilReps','Representante','perfil_1.png');
      	imgButtonsPagosMovilSalir = imgButtons.create('imgButtonsPagosMovilSalir','Salir','salir.png');
      	imgButtonsPagosMovilCtaCobrar.setDimension(130,22);        
      	imgButtonsPagosMovilFacturar.setDimension(130,22);        
        imgButtonsPagosMovilLimpiar.setDimension(130,22);
        imgButtonsPagosMovilBuscar.setDimension(130,22);
        //imgButtonsPagosMovilReps.setDimension(130,22);
        imgButtonsPagosMovilSalir.setDimension(130,22);  
		*/
	},

  	init : function() { 
  		this.create();
  		this.dialogsPagosMovils_Init();
  		this.gridsPagosMovilDatAlumno_Init();
  		this.gridsPagosMovilRecCliente_Init();
  		this.createMWs(); 
  		this.setEvents();
  	},

  	limpiarFindCliente : function(ix) {
  		switch (ix) {
		case 1: 
			editsPagosMovilCliNombre.clear();
			editsPagosMovilCliApellido.clear();  		
			break;
		case 2: 
			if (editsPagosMovilCliCi.getValue() == '') {
				editsPagosMovilCliCi.clear();
				editsPagosMovilCliApellido.clear();  		
		  		editsPagosMovilCliTelefono.clear();
		  		editsPagosMovilCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
		  		editsPagosMovilCliDireccion.clear();
			}
			break;
		default:
			if (editsPagosMovilCliCi.getValue() == '') {
				editsPagosMovilCliCi.clear();
				editsPagosMovilCliNombre.clear();
		  		editsPagosMovilCliTelefono.clear();
		  		editsPagosMovilCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
		  		editsPagosMovilCliDireccion.clear();
			}
			break;
		} 
  		dialogsPagosMovils.setMsg("");
  	},
  	
	limpiarFindAlumno : function(ix) {
		//procPagos.clean();
		editsPagosMovilCi.hideId = -1;
  		if (this.PagosMovilRepsActive) 
  		  dialogsPagosMovilReps.close(); 
		//gridsPagosMovilRecCliente.clean();
		gridsPagosMovilDatAlumno.clean();
		pcbPagosMovilCarrera.clear();
  		pcbPagosMovilPeriodo.clear();
		editsPagosMovilCliCi.clear();
  		editsPagosMovilCliNombre.clear();
  		editsPagosMovilCliApellido.clear();
  		editsPagosMovilCliTelefono.clear();
  		editsPagosMovilCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
  		editsPagosMovilCliDireccion.clear();
  		/*editsPagosMovilRecTotMora.clear();
  		editsPagosMovilRecTotDescuento.clear();
  		editsPagosMovilRecTotPagar.clear();
  		editsPagosMovilRecTotDivisa.clear();*/
  		editsPagosMovilRecConcepto.clear();
  		pcbPagosMovilRecConceptoFzble.clear();
  		dialogsPagosMovils.setMsg("");

  		switch (ix) {
		case 1: 
			editsPagosMovilNombre.setValue("");
			editsPagosMovilApellido.setValue("");  		
			break;
		case 2: 
			editsPagosMovilCi.setValue("");
			editsPagosMovilApellido.setValue("");  		
			break;
		default:
			editsPagosMovilCi.setValue("");
			editsPagosMovilNombre.setValue("");
			break;
		} 
  	},
  	
  	copiarCliente : function() {
  		editsPagosMovilCliCi.setValue(editsPagosMovilCi.getValue());
  		this.buscar();
  	},

  	callWinCalcMonto : function() {
		if (editsPagosMovilCi.valid(dialogsPagosMovils))
			if (editsPagosMovilNombre.valid(dialogsPagosMovils))
				if (editsPagosMovilApellido.valid(dialogsPagosMovils)) {
					CalcMontos.show();
				}
				else {
					editsPagosMovilRecConcepto.clear();
				}
	}, 
	
  	setData : function() {
		if (gridsPagosMovilDatAlumno.getDataCell(1) != "") {
			this.facturar(gridsPagosMovilDatAlumno.getDataCell(1),
	  					  gridsPagosMovilDatAlumno.getDataCell(2),
	  					  gridsPagosMovilDatAlumno.getDataCell(3),
	  					  (procPagos.getDivisa() * (parseFloat(gridsPagosMovilDatAlumno.getDataCell(4),10)-parseFloat(gridsPagosMovilDatAlumno.getDataCell(3),10))).toFixed(2),
	  					  gridsPagosMovilDatAlumno.getDataCell(5),
	  					  gridsPagosMovilDatAlumno.getDataCell(6),
	  					  gridsPagosMovilDatAlumno.getDataCell(7),
	  					  gridsPagosMovilDatAlumno.getDataCell(8),
	  					  gridsPagosMovilDatAlumno.getDataCell(9),
	  					  gridsPagosMovilDatAlumno.getDataCell(10),
	  					  gridsPagosMovilDatAlumno.getDataCell(11),
	  					  gridsPagosMovilDatAlumno.getDataCell(12),
	  					  gridsPagosMovilDatAlumno.getDataCell(13),
	  					  gridsPagosMovilDatAlumno.getDataCell(14),
	  					  gridsPagosMovilDatAlumno.getDataCell(15),
	  					  gridsPagosMovilDatAlumno.getDataCell(16),
	  					  "NO",
	  					  false);
	  		gridsPagosMovilDatAlumno.cleanRow();
	  		editsPagosMovilCliCi.setFocus();
	  	}
	},

	facturar : function(cedAlumno, concep, abono, monto, feEmi, feVenc, periodo, idCuot_idCred, idPer, poMora, poDesc, tiDato, idConcep, 
		                idPersAlumno, idCarrera, esCondInsc, idPersMedico, stspp) {
  		
  		var item = gridsPagosMovilRecCliente.getTotalRecord() + 1;
  		//ACTUALIZACION DE TOTALES
  		if(!stspp){
  		  if(isProntoPago(feVenc) && parseFloat(abono)==0){
  		    procPagos.actualizaTotalesPagos(monto, poDesc, procPagos.ADD_PagosMovil);//descuento por pronto PagosMovil a credito
  		    dialogsPagosMovils.setMsg('El item '+item+' tiene descuento por pronto PagosMovil');
  		  }
  		  else{
  		    procPagos.actualizaTotalesPagos(monto, 0, procPagos.ADD_PagosMovil);//no tiene pronto PagosMovil
  		    dialogsPagosMovils.setMsg('El item '+item+' no tiene descuento por pronto PagosMovil');
  		    poDesc=0;
  		  }
  		  if(isVenc(feVenc) && parseFloat(abono)==0){
  		    procPagos.actualizaMora(monto, poMora, procPagos.ADD_MORA);
  		    dialogsPagosMovils.setMsg('El item '+item+' posee atraso de PagosMovil');
  		  }  
  		}
  		else{
  		  procPagos.actualizaTotalesPagos(monto, poDesc, procPagos.ADD_PagosMovil);//descuento por pronto PagosMovil de contado
  		  dialogsPagosMovils.setMsg('tiene descuento por pronto PagosMovil');
  	   	}
  	   	gridsPagosMovilRecCliente.addData([item,
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
  		//imagesPagosMovilForPagosMovil.setEnable();
  	},
  	
  	//Al hacer click en el grid de conceptos
  	setDataEdits : function() {
  		this.actRowCli = gridsPagosMovilRecCliente.getRowCell();
  		gridsPagosMovilRecCliente.selectedRow(this.actRowCli);
  		if(gridsPagosMovilRecCliente.getDataCell(14) != "") {
  			gridsPagosMovilDatAlumno.addData([gridsPagosMovilRecCliente.getDataCell(2),
  			                            gridsPagosMovilRecCliente.getDataCell(3),
  			                            gridsPagosMovilRecCliente.getDataCell(9),
  			                            (parseFloat(gridsPagosMovilRecCliente.getDataCell(5),10)+parseFloat(gridsPagosMovilRecCliente.getDataCell(9),10)).toFixed(2) / procPagos.getDivisa(),
  			                            gridsPagosMovilRecCliente.getDataCell(4),
  			                            gridsPagosMovilRecCliente.getDataCell(10), 
  			                            gridsPagosMovilRecCliente.getDataCell(12), 
  			                            gridsPagosMovilRecCliente.getDataCell(13), 
  			                            gridsPagosMovilRecCliente.getDataCell(11), 
  			                            gridsPagosMovilRecCliente.getDataCell(6), 
  			                            gridsPagosMovilRecCliente.getDataCell(7), 
  			                            gridsPagosMovilRecCliente.getDataCell(14), 
  			                            gridsPagosMovilRecCliente.getDataCell(8),
  			                            gridsPagosMovilRecCliente.getDataCell(15),
  			                            gridsPagosMovilRecCliente.getDataCell(16)]); 
  		} 
  		this.eliminaConceptoGrid();
  	},
  	
  	eliminaConceptoGrid : function() {
  		procPagos.actualizaTotalesPagosMovils(gridsPagosMovilRecCliente.getDataCell(5), gridsPagosMovilRecCliente.getDataCell(7), procPagos.REMOVE_PagosMovil); 
  		procPagos.actualizaMora(gridsPagosMovilRecCliente.getDataCell(5), gridsPagosMovilRecCliente.getDataCell(6), procPagos.DEC_MORA);
  		gridsPagosMovilRecCliente.cleanRow();
  		gridsPagosMovilRecCliente.firstPage();
  		for(var i=1; i<=gridsPagosMovilRecCliente.getTotalRecord(); i++) {  
  			gridsPagosMovilRecCliente.setDataCell(i,1,i);  
  		}
  		if (gridsPagosMovilRecCliente.getTotalRecord() == 0) {
			imagesPagosMovilForPagosMovil.setDisable();
  			procPagos.clean();
  	   }
  	},
  	
  	closeWinsPagosMovils : function() {
  		if (this.PagosMovilRepsActive) dialogsPagosMovilReps.close(); 
  	  	dialogsPagosMovils.close();
  		this.PagosMovilRepsActive = false;
  	},

  	limitDate : function() {
		var limit = calendarPagosMovilDocfecha.compare(calendarPagosMovilDocfecha.getYear(), calendarPagosMovilDocfecha.getIntMonth(), calendarPagosMovilDocfecha.getDay(), Tool.getDate().split('-')[2], Tool.getDate().split('-')[1], Tool.getDate().split('-')[0]); 
	  	
	  	if (limit == 1) {
			Alert.show('LA FECHA NO PUEDE SER MAYOR AL DIA ACTUAL', 'SISTEMA', Alert.TYPE_INFO);
			calendarPagosMovilDocfecha.setFechaToEdit(Tool.getDate());
		}
		return limit;
	},

  	callWinFormaPagosMovil : function() {
		if (editsPagosMovilCliCi.valid(dialogsPagosMovils))
			if (editsPagosMovilCliNombre.valid(dialogsPagosMovils))
				if (editsPagosMovilCliApellido.valid(dialogsPagosMovils))
					if (editsPagosMovilCliTelefono.valid(dialogsPagosMovils))
						if (editsPagosMovilCliDireccion.valid(dialogsPagosMovils))
							if (this.limitDate() != 1) {
								FormPago.show();
							}
  	},

	loadDataInit: function() {
		calendarPagosMovilDocfecha.setDisable();
    	if (json('getPermiso').data[0] == 'ACTIVO')
    		calendarPagosMovilDocfecha.setEnable();
    		
		editsPagosMovilCliTelefono.setMaskPhone(json('getDiscInter').data[0]);
        procPagos.setDivisa(json('getDivisa').data[0]);
		dialogsPagosMovils.setMsg(xmlHttpReq.objStsResponse.shortInfo);
        dlgWait.hide();
        editsPagosMovilCi.setFocus();
    },

  	limpiar : function(callSrv) {
  		editsPagosMovilCi.hideId = -1;
  		editsPagosMovilRecConcepto.clear();
  		pcbPagosMovilRecConceptoFzble.clear();
  		editsPagosMovilCi.clear();
  		editsPagosMovilNombre.clear();
  		editsPagosMovilApellido.clear();
  		pcbPagosMovilCarrera.clear();
  		pcbPagosMovilPeriodo.clear();
  		gridsPagosMovilDatAlumno.clean();
		procPagos.clean();
  		editsPagosMovilCliCi.clear();
  		editsPagosMovilCliNombre.clear();
  		editsPagosMovilCliApellido.clear();
  		editsPagosMovilCliTelefono.clear();
  		editsPagosMovilCliDireccion.clear();
  		gridsPagosMovilRecCliente.clean();
		calendarPagosMovilDocfecha.clear();
		calendarPagosMovilDocfecha.setFechaToEdit(Tool.getDate());
  		editsPagosMovilRecTotMora.clear();
  		editsPagosMovilRecTotDescuento.clear();
  		editsPagosMovilRecTotPagar.clear();
  		editsPagosMovilRecTotDivisa.clear();
		dialogsPagosMovils.addObject(gridsPagosMovilRecConcepto,-1000,-1000);
  		gridsPagosMovilRecConcepto.clean();
  		dialogsPagosMovils.setMsg("");
  		if (!callSrv || callSrv == undefined) {
  			Tool.cnnSrv('MantObject', 'getPagosConcepto', this.windowName + '.loadDataInit()');
  		}
  	},

  	getDataGridCuota : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		rlx.addInt('reg', editsPagosMovilCi.hideId);
		rlx.add('reg', pcbPagosMovilRecConceptoFzble.setModeReturnGetText(0));
		rlx.add('reg', pcbPagosMovilRecConceptoFzble.setModeReturnGetText(0));
  		Tool.cnnSrv("MantObject", "getCreditoCuotaAlumno", this.windowName + ".loadDataGridCuota()", rlx);
  	},
  	
  	loadDataGridCuota : function() {
  		Tool.loadGridData(dialogsPagosMovils, gridsPagosMovilDatAlumno, false, json('getCreditoCuotaAlumno'));    
  		Tool.loadPowerComboData(dialogsPagosMovils, pcbPagosMovilPeriodo, -1, 1, json('getPeriodoVigente'));
		pcbPagosMovilPeriodo.setSelectedIndex(1);
		this.copiarCliente();
  	},
  	
  	getDatoCliente : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		editsPagosMovilCliCi.setDataType('string');
		rlx.add('reg', editsPagosMovilCliCi);
		rlx.add('reg', editsPagosMovilCliCi);
		rlx.add('reg', editsPagosMovilCliCi);
		rlx.add('reg', editsPagosMovilCliNombre);
		rlx.add('reg', editsPagosMovilCliNombre);
		rlx.add('reg', editsPagosMovilCliApellido);
		rlx.add('reg', editsPagosMovilCliApellido);
  		Tool.cnnSrv('MantObject', 'getDatoCliente', this.windowName + '.loadDatoCliente()', rlx);
  	},
  	
  	loadDatoCliente : function() {
  		editsPagosMovilCliCi.setValue(json("getDatoCliente").data[0][0]);
  		editsPagosMovilCliNombre.setValue(json("getDatoCliente").data[1][0]);
  		editsPagosMovilCliApellido.setValue(json("getDatoCliente").data[2][0]); 
  		editsPagosMovilCliTelefono.setValue(json("getDatoCliente").data[3][0]);
  		editsPagosMovilCliDireccion.setValue(json("getDatoCliente").data[4][0]);
  		editsPagosMovilRecConcepto.setFocus();
  	},

  	getCarrera : function() {
		var rlx = xmlStructs.createRecordList("rlx");
  		
		rlx.addInt('reg', editsPagosMovilCi.hideId);
		Tool.cnnSrv('MantObject', 'getCarreraAlumno', this.windowName + '.loadDataCarrera()', rlx);
  	},

  	loadDataCarrera : function() {
		Tool.loadPowerComboData(dialogsPagosMovils, pcbPagosMovilCarrera, -1, 1, json('getCarreraAlumno'));
		pcbPagosMovilCarrera.setSelectedIndex(1); 
  		this.getDataGridCuota();
  	},

  	buscar : function() {
		if (editsPagosMovilCi.getValue() != '' && editsPagosMovilNombre.getValue() != '' && editsPagosMovilApellido.getValue() != '') {
			editsPagosMovilCliCi.setDataType('int');
			ResuBusMovils.setObjectExtFnc(editsPagosMovilCliCi, editsPagosMovilCliNombre, editsPagosMovilCliApellido, "PagosMovils.getDatoCliente()");
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusMovils, gridsResuBusMovils, 'ResuBusMovils', editsPagosMovilCliCi, editsPagosMovilCliCi, editsPagosMovilCliNombre, editsPagosMovilCliNombre, editsPagosMovilCliApellido, editsPagosMovilCliApellido);
		}
		else if (editsPagosMovilCi.getValue() != '' || editsPagosMovilNombre.getValue() != '' || editsPagosMovilApellido.getValue() != '') {
        	ResuBusMovils.setObjectExtFnc(editsPagosMovilCi, editsPagosMovilNombre, editsPagosMovilApellido, "PagosMovils.getDataGridCuota()");
			Tool.getGridData('MantObject', 'getCreaBoletinAlumno', dialogsResuBusMovils, gridsResuBusMovils, 'ResuBusMovils', editsPagosMovilCi, editsPagosMovilCi, editsPagosMovilNombre, editsPagosMovilNombre, editsPagosMovilApellido, editsPagosMovilApellido);
		}
		else {
			Alert.show('Ingrese datos del Estudiante: C.i., Nombre, Apellido', 'SISTEMA', Alert.TYPE_INFO);
			editsPagosMovilCi.valid(dialogsPagosMovils);
			editsPagosMovilNombre.valid(dialogsPagosMovils);
			editsPagosMovilApellido.valid(dialogsPagosMovils); 
		}
   	},
	
	setEvents : function() {
  		editsPagosMovilCi.onEnter(this.windowName + ".buscar()");
  		editsPagosMovilCi.onChange(this.windowName + ".limpiarFindAlumno(1)");
  		editsPagosMovilCi.onClick(this.windowName + ".limpiarFindAlumno(1)");
  		editsPagosMovilNombre.onEnter(this.windowName + ".buscar()");
  		editsPagosMovilNombre.onChange(this.windowName + ".limpiarFindAlumno(2)");
  		editsPagosMovilNombre.onClick(this.windowName + ".limpiarFindAlumno(2)");
  		editsPagosMovilApellido.onEnter(this.windowName + ".buscar()");
  		editsPagosMovilApellido.onChange(this.windowName + ".limpiarFindAlumno(3)");
  		editsPagosMovilApellido.onClick(this.windowName + ".limpiarFindAlumno(3)");
  		pcbPagosMovilCarrera.onChange(this.windowName + ".getDataGridCuota()");
  		//pcbPagosMovilPeriodo.onChange(this.windowName + ".getDataConceptoSinPagosMovil()");
  		gridsPagosMovilDatAlumno.onClickCells(this.windowName + ".setData()");
  		editsPagosMovilCliCi.onEnter(this.windowName + ".buscar()");
  		editsPagosMovilCliCi.onChange(this.windowName + ".limpiarFindCliente(1)");
  		editsPagosMovilCliCi.onClick(this.windowName + ".limpiarFindCliente(1)");
  		editsPagosMovilCliNombre.onEnter(this.windowName + ".buscar()");
  		editsPagosMovilCliNombre.onChange(this.windowName + ".limpiarFindCliente(2)");
  		editsPagosMovilCliNombre.onClick(this.windowName + ".limpiarFindCliente(2)");
  		editsPagosMovilCliApellido.onEnter(this.windowName + ".buscar()");
  		editsPagosMovilCliApellido.onChange(this.windowName + ".limpiarFindCliente(3)");
  		editsPagosMovilCliApellido.onClick(this.windowName + ".limpiarFindCliente(3)");
  		//pcbPagosMovilRecConceptoFzble.onChange(this.windowName + ".callWinCalcMonto()");
  		imagesPagosMovilRecIncluir.onClick(this.windowName + ".getDataConceptoSinPagosMovil(false)");

		imagesPagosMovilCuePorCobrar.onClick(this.windowName + ".getDataConceptoSinPagosMovil(false)");
		imagesPagosMovilCuePorCobrar.onClick(this.windowName + ".getDataConceptoSinPagosMovil(false)");




  		gridsPagosMovilRecCliente.onClickCells(this.windowName + ".setDataEdits()");
  		//imgButtonsPagosMovilCtaCobrar.onClick(this.windowName + ".getDataConceptoSinPagosMovil(true)");
  		imagesPagosMovilForPagosMovil.onClick(this.windowName + ".callWinFormaPagosMovil()");
  		imagesPagosMovilLimpiar.onClick(this.windowName + ".limpiar()");
  		imagesPagosMovilBusCliente.onClick(this.windowName + ".buscar()");
  		//imgButtonsPagosMovilReps.onClick("PagosMovilReps.show()");
  		imagesPagosMovilSalir.onClick(this.windowName + ".closeWinsPagosMovils()");
  		dialogsPagosMovils.onClickCloseDialog(this.windowName + ".closeWinsPagosMovils()");
  		calendarPagosMovilDocfecha.onSelectedDay(this.windowName + ".limitDate()");
  		editsPagosMovilRecConcepto.onEnter(this.windowName + ".getDataConceptoSinPagosMovil()");
  		editsPagosMovilRecConcepto.onClick("dialogsPagosMovils.addObject(gridsPagosMovilRecConcepto,-1000,-1000);gridsPagosMovilRecConcepto.clean();");
		gridsPagosMovilRecConcepto.onClickCells(this.windowName+".incluirConcepto()");
  	},

	getDataConceptoSinPagosMovil : function(ctaCobrar) {
		var rlx = xmlStructs.createRecordList("rlx");

		gridsPagosMovilRecConcepto.clean();
		dialogsPagosMovils.addObject(gridsPagosMovilRecConcepto,-1000,-1000);
  		pcbPagosMovilRecConceptoFzble.clear();
		if (editsPagosMovilCi.valid(dialogsPagosMovils))
			if (editsPagosMovilNombre.valid(dialogsPagosMovils))
				if (editsPagosMovilApellido.valid(dialogsPagosMovils)) {
		  			procPagos.setYear(pcbPagosMovilPeriodo.setModeReturnGetText(2).getText().substr(0,4));
			  		rlx.addInt('reg', editsPagosMovilCi.hideId);
			  		rlx.add('reg', pcbPagosMovilPeriodo.setModeReturnGetText(0));
			  		rlx.add('reg', editsPagosMovilRecConcepto);
			  		rlx.addStr('reg', ctaCobrar);
			  		Tool.cnnSrv("MantObject", "getConceptoSinPago", this.windowName + ".loadDataConceptoSinPagosMovil(" + ctaCobrar + ")", rlx);
				}
  	},
  	
  	loadDataConceptoSinPagosMovil : function(ctaCobrar) {
		if (!ctaCobrar) {
			this.gridsPagosMovilRecConcepto_Init(json('getPagosConcepto').data[0].length);
			dialogsPagosMovils.addObject(gridsPagosMovilRecConcepto,2,40);
			gridsPagosMovilRecConcepto.onClickCells(this.windowName+".incluirConcepto()");
    		gridsPagosMovilRecConcepto.clean();    		
    		Tool.loadGridData(dialogsPagosMovils, gridsPagosMovilRecConcepto, gridsPagosMovilRecConcepto.setFocus(), json('getPagosConcepto'));
    	}
    	else {
			this.gridsPagosMovilRecConcepto_Init(json('getPagosConceptoFzble').data[0].length);
			dialogsPagosMovils.addObject(gridsPagosMovilRecConcepto,20,18);
			gridsPagosMovilRecConcepto.onClickCells(this.windowName+".callWinCalcMonto()");
    		gridsPagosMovilRecConcepto.clean();    		
    		Tool.loadGridData(dialogsPagosMovils, gridsPagosMovilRecConcepto, gridsPagosMovilRecConcepto.setFocus(), json('getPagosConceptoFzble'));
		}
  	},
        
    incluirConcepto : function() {
		if (editsPagosMovilCi.valid(dialogsPagosMovils)) 
			if (gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 0) != "") {	
				if (gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 14) == "NO") {
					this.facturar(
						//cedAlumno 
						editsPagosMovilCi.getText(),
						//nombre concepto
						gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 0) + ' ' + gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 1), 
						//abono
						0.0, 
						//monto
						parseFloat(gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 8),10) * procPagos.getDivisa(),
						//feEmi
						'', 
						//feVenc
						'', 
						//periodo
						'', 
						//idCuot_idCred
						0, 
						//idPer
						pcbPagosMovilPeriodo.setModeReturnGetText(0).getText(), 
						//poMora
						0.0, 
						//poDesc 
						0.0, 
						//tiDato
						'',
						//idConcep  
						gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 3),
						//idPersAlumno
						editsPagosMovilCi.hideId,
						//idCarrera 
						gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 15),
						//esCondInsc
						gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 12),
						//idPersMedica
						gridsPagosMovilRecConcepto.getDataCell(gridsPagosMovilRecConcepto.getActualRow(), 2),
						//stspp
						false);
					gridsPagosMovilRecConcepto.clean();
					dialogsPagosMovils.addObject(gridsPagosMovilRecConcepto,-1000,-1000);
					editsPagosMovilRecConcepto.clear();
					editsPagosMovilRecConcepto.setFocus();
				}
				else {
					CaptValor.show();
					CaptValor.setIndex(i);
				}
		}  			
  	}
};