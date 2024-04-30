var dialogsMantConceptos       = {};
var pcbMantConPagCarrera       = {};
var pcbMantConTipPersona       = {};
var editsMantConDescripcion    = {};
var pcbMantConPagUnico         = {};
var pcbMantConEstConcepto      = {};
var pbcMantConDonacion         = {};
var editsMantConMonto          = {};
var pcbMantConConInscripcion   = {};
var pbcMantConUC               = {};
var pbcMantConFinanciable      = {};
var editsMantConNumCuotas      = {};
var editsMantConInicial        = {};
var editsMantConDiaPago        = {};
var editsMantConPorDecuento    = {};
var editsMantConPorMora        = {};
var editsMantConPorPagoMed     = {};
var gridsMantConceptos         = {};
var imgButtonsMantConAgregar   = {};
var imgButtonsMantConModificar = {};
var imgButtonsMantConEliminar  = {};
var imgButtonsMantConLimpiar   = {};
var imgButtonsMantConReporte   = {};
var imgButtonsMantConBuscar    = {};
var imgButtonsMantConSalir     = {};
var mwMantConceptos = {};// minWindow

var MantConceptos = {
	windowName : 'MantConceptos',
	isCreate : false,
	
	show : function() {
		if (!this.isCreate) {
		  this.init();
		  this.isCreate = true;
		}

		if (dialogsMantConceptos.isByClean())
 			this.limpiar();			
		dialogsMantConceptos.show();
	},
	
	hide : function() {
		dialogsMantConceptos.hide();
	},
	
	createMWs : function() {
        mwMantConceptos  = desktop.addMinWindow('M.Conceptos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsMantConceptos .setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
	},

	dialogsMantConceptos_Init : function() {
        dialogsMantConceptos.setMinimizeXY(0,0);
        dialogsMantConceptos.setCenterScreen();
        dialogsMantConceptos.addSpace(0,0,20);
        dialogsMantConceptos.addLn(1,1,1);
		dialogsMantConceptos.setHeightCell(1,1,35);
		dialogsMantConceptos.addObject(pcbMantConPagCarrera,22,35);
		dialogsMantConceptos.addObject(pcbMantConTipPersona,200,35);
		dialogsMantConceptos.addObject(editsMantConDescripcion,430,35);
		dialogsMantConceptos.addObject(editsMantConMonto,712,62);
		dialogsMantConceptos.addObject(pcbMantConEstConcepto,22,62);
        pcbMantConEstConcepto.setWidthCombo(68);
		pcbMantConEstConcepto.addOptionAndSimpleValue(null, 'ACTIVO','ACTIVO');
        pcbMantConEstConcepto.addOptionAndSimpleValue(null, 'INACTIVO','INACTIVO');			
		dialogsMantConceptos.addObject(pcbMantConPagUnico,272,62);
		//dialogsMantConceptos.addObject(pcbMantConConInscripcion,360,62);
		//dialogsMantConceptos.addObject(pbcMantConUC,449,62);
		dialogsMantConceptos.addObject(editsMantConPorPagoMed,430,62);
		dialogsMantConceptos.addObject(pbcMantConDonacion,580,62);
        pbcMantConDonacion.setWidthCombo(25);
        pbcMantConDonacion.addOptionAndSimpleValue(null, 'NO','NO');
        pbcMantConDonacion.addOptionAndSimpleValue(null, 'SI','SI');  		
		dialogsMantConceptos.addLn(3,1,1);
		dialogsMantConceptos.setHeightCell(3,1,36);		
		var c1 = container.create("c1",'Configurar Cuentas x Cobrar', 2);
		c1.setDimension(798,50);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');		
		c1.addObject(editsMantConNumCuotas, 215,111);
		editsMantConNumCuotas.setSizeEdit(40);
		editsMantConNumCuotas.setMaxLength(2);
		editsMantConNumCuotas.readOnly(true);
		c1.addObject(pbcMantConFinanciable,30,111);
        pbcMantConFinanciable.setWidthCombo(25);
        pbcMantConFinanciable.addOptionAndSimpleValue(null, 'NO','NO');
        pbcMantConFinanciable.addOptionAndSimpleValue(null, 'SI','SI');		
		c1.addObject(editsMantConDiaPago, 360,111);
		editsMantConDiaPago.setSizeEdit(40);
		editsMantConDiaPago.setMaxLength(2);
		editsMantConDiaPago.readOnly(true);
		//c1.addObject(editsMantConInicial, 387,111);
		editsMantConInicial.setSizeEdit(40);
		editsMantConInicial.setMaxLength(8);
		editsMantConInicial.readOnly(true);		
		c1.addObject(editsMantConPorDecuento, 542,111);
		editsMantConPorDecuento.setSizeEdit(40);
		editsMantConPorDecuento.setMaxLength(8);
		editsMantConPorDecuento.readOnly(true);		
		c1.addObject(editsMantConPorMora, 700,111);
		editsMantConPorMora.setSizeEdit(40);
		editsMantConPorMora.setMaxLength(5);
		editsMantConPorMora.readOnly(true);
		dialogsMantConceptos.addObjToDialog(c1, 5, 1);
		dialogsMantConceptos.addLn(6,1,1);
		dialogsMantConceptos.setHeightCell(6,1,11);
		dialogsMantConceptos.addObjToDialog(gridsMantConceptos.getObject(),7,1);
		dialogsMantConceptos.addLn(8,1,1);
		dialogsMantConceptos.setHeightCell(8,1,12);
        dialogsMantConceptos.addLn(8,1,1);
		dialogsMantConceptos.setHeightCell(8,1,9);		
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConAgregar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConModificar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConEliminar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConLimpiar,9,1);
		dialogsMantConceptos.addObjToDialog(imgButtonsMantConReporte,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConBuscar,9,1);
        dialogsMantConceptos.addObjToDialog(imgButtonsMantConSalir,9,1);       
        dialogsMantConceptos.adjAllMarginObj(9,1,20);
        dialogsMantConceptos.leftMarginObj(9,1,0,20);	       	
	},

	gridsMantConceptos_Init : function()  {
        gridsMantConceptos.setFixColRow(false,true);
        gridsMantConceptos.addTitleVectorX(['Servicio','Concepto','Monto','Exige Pago','C/x Cobrar','M. Libre','uc','cuota','poinicial','diapago','idconcepto','podescuento','pomora','pagUnico','Estado','rubro','% Pg.Dr.']);
        gridsMantConceptos.showData();        
        gridsMantConceptos.setSizeCol(1,70);
        gridsMantConceptos.setSizeCol(2,380);
        gridsMantConceptos.setSizeCol(3,80);
        gridsMantConceptos.setSizeCol(4,85);
        gridsMantConceptos.setSizeCol(5,85);
        gridsMantConceptos.setSizeCol(6,70);
        gridsMantConceptos.setSizeCol(7,0);
        gridsMantConceptos.setSizeCol(8,0);
        gridsMantConceptos.setSizeCol(9,0);
        gridsMantConceptos.setSizeCol(10,0);
        gridsMantConceptos.setSizeCol(11,0);
        gridsMantConceptos.setSizeCol(12,0);
        gridsMantConceptos.setSizeCol(13,0);
        gridsMantConceptos.setSizeCol(14,0);
        gridsMantConceptos.setSizeCol(15,62);
        gridsMantConceptos.setSizeCol(16,0);
        gridsMantConceptos.setSizeCol(17,50);
		gridsMantConceptos.hideCol(4);
        gridsMantConceptos.hideCol(7);
        gridsMantConceptos.hideCol(8);
        gridsMantConceptos.hideCol(9);
        gridsMantConceptos.hideCol(10);
        gridsMantConceptos.hideCol(11);
        gridsMantConceptos.hideCol(12);
        gridsMantConceptos.hideCol(13);
        gridsMantConceptos.hideCol(14);
        gridsMantConceptos.hideCol(16);
	},

	create : function() {
		dialogsMantConceptos = dialogs.create('dialogsMantConceptos',0,0,839,609,'CONCEPTO DE PAGO');
		dialogsMantConceptos.setAdjY(20);
		pcbMantConPagCarrera = powerComboBox.create('pcbMantConPagCarrera', 'pcbMantConPagCarrera', 'Servicio (*):', 1,78);
		pcbMantConPagCarrera.setTypeObjOpt('input', 'checkbox');
		pcbMantConPagCarrera.setFirstRowCheckMode(2);
		pcbMantConPagCarrera.addEmptyOption();
		pcbMantConPagCarrera.setValidEmpty();
		pcbMantConPagCarrera.setFieldFind(true);
		pcbMantConPagCarrera.enableReadOnlyEditor();
		pcbMantConPagCarrera.setDataType('string');
        pcbMantConPagCarrera.setWidthCombo(66);
		pcbMantConTipPersona = powerComboBox.create('pcbMantConTipPersona', 'pcbMantConTipPersona', 'Tipo P.:', 1,48); 
		pcbMantConTipPersona.setTypeObjOpt('input', 'checkbox');
		pcbMantConTipPersona.setFirstRowCheckMode(2);		
		pcbMantConTipPersona.enableReadOnlyEditor();
        pcbMantConTipPersona.addEmptyOption();
        pcbMantConTipPersona.setValidEmpty();
        pcbMantConTipPersona.setFieldFind(true);
        pcbMantConTipPersona.setDataType('string');
		pcbMantConTipPersona.setWidthCombo(150);
		editsMantConDescripcion = edits.create('editsMantConDescripcion','editsMantConDescripcion','Concepto (*):',3,78,'normal');
		editsMantConDescripcion.setValidEmpty();
		editsMantConDescripcion.setFieldFind(true);
		editsMantConDescripcion.hideId = '';
        editsMantConDescripcion.setSizeEdit(308);
		editsMantConDescripcion.setMaxLength(80); 
		editsMantConMonto = edits.create('editsMantConMonto','editsMantConMonto','Monto:',3,41,'normal');
		editsMantConMonto.setSizeEdit(63);
		editsMantConMonto.setMaxLength(8);		
		editsMantConMonto.setValidEmpty();
		editsMantConMonto.setValidReal();	
		pcbMantConPagUnico = powerComboBox.create('pcbMantConPagUnico', 'pcbMantConPagUnico', 'Una vez x Año:', 1,100); 
		pcbMantConPagUnico.enableReadOnlyEditor();
		pcbMantConPagUnico.addEmptyOption();
		pcbMantConPagUnico.setValidEmpty();
		pcbMantConPagUnico.setWidthCombo(25);
        pcbMantConPagUnico.addOptionAndSimpleValue(null, 'NO','NO');
        pcbMantConPagUnico.addOptionAndSimpleValue(null, 'SI','SI');		
		pcbMantConEstConcepto = powerComboBox.create('pcbMantConEstConcepto', 'pcbMantConEstConcepto','Estado:', 1,76);
		pcbMantConEstConcepto.enableReadOnlyEditor();
		pcbMantConEstConcepto.addEmptyOption();
		pcbMantConEstConcepto.setValidEmpty();	
		pcbMantConConInscripcion = powerComboBox.create('pcbMantConConInscripcion', 'pcbMantConConInscripcion', 'Requiere Médico:', 1,110);
		pcbMantConConInscripcion.enableReadOnlyEditor();
		pcbMantConConInscripcion.addEmptyOption();
		pcbMantConConInscripcion.setValidEmpty();	
		pcbMantConConInscripcion.setWidthCombo(25);
        pcbMantConConInscripcion.addOptionAndSimpleValue(null, 'NO','NO');		
        pcbMantConConInscripcion.addOptionAndSimpleValue(null, 'SI','SI');		
		pbcMantConUC = powerComboBox.create('pbcMantConUC', 'pbcMantConUC','Requiere U.C.:', 1,86);
		pbcMantConUC.enableReadOnlyEditor();
		pbcMantConUC.addEmptyOption();
		pbcMantConUC.setValidEmpty();
		pbcMantConUC.setWidthCombo(25);
        pbcMantConUC.addOptionAndSimpleValue(null, 'NO','NO');
		pbcMantConUC.addOptionAndSimpleValue(null, 'SI','SI');
		pbcMantConFinanciable = powerComboBox.create('pbcMantConFinanciable', 'pbcMantConFinanciable', 'Cuentas x Cobrar:', 1,110);
		pbcMantConFinanciable.enableReadOnlyEditor();
		pbcMantConFinanciable.addEmptyOption();
		pbcMantConFinanciable.setValidEmpty();	
		pbcMantConDonacion = powerComboBox.create('pbcMantConDonacion', 'pbcMantConDonacion', 'Monto Libre:', 1,70);
		pbcMantConDonacion.enableReadOnlyEditor();
		pbcMantConDonacion.addEmptyOption();
		pbcMantConDonacion.setValidEmpty();	
		editsMantConNumCuotas = edits.create('editsMantConNumCuotas','editsMantConNumCuotas','N° Cuotas:',3,66,'normal');
		editsMantConNumCuotas.setValidEmpty();
		editsMantConNumCuotas.setValidInteger();
		editsMantConDiaPago = edits.create('editsMantConDiaPago','editsMantConDiaPago','Día Vencimiento:',3,96,'normal');
		editsMantConDiaPago.setValidEmpty();
		editsMantConDiaPago.setValidInteger();
		editsMantConInicial = edits.create('editsMantConInicial','editsMantConInicial','% Inicial:',3,60,'normal');
		editsMantConInicial.setValidEmpty();
		editsMantConInicial.setValidReal();
		editsMantConPorDecuento = edits.create('editsMantConPorDecuento','editsMantConPorDecuento','% Descuento:',3,82,'normal');
		editsMantConPorDecuento.setValidEmpty();
		editsMantConPorDecuento.setValidReal();
		editsMantConPorMora = edits.create('editsMantConPorMora','editsMantConPorMora','% Mora:',3,55,'normal');
		editsMantConPorMora.setValidEmpty();
		editsMantConPorMora.setValidReal();
		editsMantConPorPagoMed = edits.create('editsMantConPorPagoMed','editsMantConPorPagoMed','% Pago:',3,78,'normal');
		editsMantConPorPagoMed.setValidEmpty();
		editsMantConPorPagoMed.setValidReal();
		editsMantConPorPagoMed.setSizeEdit(30);
		editsMantConPorPagoMed.setMaxLength(3); 
		gridsMantConceptos = grids.create('gridsMantConceptos',20,17);
		imgButtonsMantConAgregar = imgButtons.create('imgButtonsMantConAgregar','Agregar','ok.png');
		imgButtonsMantConModificar = imgButtons.create('imgButtonsMantConModificar','Modificar','icono_modificar.png');
		imgButtonsMantConModificar.setDisable();
		imgButtonsMantConEliminar = imgButtons.create('imgButtonsMantConEliminar','Eliminar','eliminar.jpg');
		imgButtonsMantConEliminar.setDisable();
		imgButtonsMantConLimpiar = imgButtons.create('imgButtonsMantConLimpiar','Limpiar','limpiar.png');
		imgButtonsMantConReporte = imgButtons.create('imgButtonsMantConReporte','Reporte','limpiar.png');	
		imgButtonsMantConBuscar = imgButtons.create('imgButtonsMantConBuscar','Buscar','icono_buscar.png');
		imgButtonsMantConSalir = imgButtons.create('imgButtonsMantConSalir','Salir','salir.png');
		imgButtonsMantConAgregar.setDimension(90,22);
        imgButtonsMantConModificar.setDimension(90,22);
        imgButtonsMantConEliminar.setDimension(90,22);
        imgButtonsMantConLimpiar.setDimension(90,22);
		imgButtonsMantConReporte.setDimension(90,22);
        imgButtonsMantConBuscar.setDimension(90,22);
        imgButtonsMantConSalir.setDimension(90,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsMantConceptos_Init();
  		this.gridsMantConceptos_Init();
  		this.createMWs(); 
  	},

  	limpiar : function(methodName) {
  		pcbMantConPagCarrera.clearChecks();
  		pcbMantConPagCarrera.setSelectedIndex(0);
  		pcbMantConTipPersona.clearChecks();
		pcbMantConTipPersona.setSelectedIndex(0);
  		editsMantConDescripcion.setValue("");
  		editsMantConMonto.setValue("");
  		editsMantConMonto.readOnly(false);
  		pcbMantConPagUnico.setSelectedIndex(1);
  		pcbMantConEstConcepto.setSelectedIndex(1);
  		pcbMantConConInscripcion.setSelectedIndex(1);
  		pbcMantConUC.setSelectedIndex(1);
  		pbcMantConFinanciable.setSelectedIndex(1);
  		pbcMantConDonacion.setSelectedIndex(1);
  		editsMantConNumCuotas.setValue("12");
  		editsMantConNumCuotas.readOnly(true);
  		editsMantConInicial.setValue("0");
  		editsMantConInicial.readOnly(true);
  		editsMantConDiaPago.setValue("6");
  		editsMantConDiaPago.readOnly(true);
  		editsMantConPorDecuento.setValue("0");
  		editsMantConPorDecuento.readOnly(true);
  		editsMantConPorMora.setValue("0");
  		editsMantConPorMora.readOnly(true);
  		editsMantConPorPagoMed.setValue("0");
  		dialogsMantConceptos.setMsg("");
		imgButtonsMantConAgregar.setEnable();
		imgButtonsMantConModificar.setDisable();
		imgButtonsMantConEliminar.setDisable();

		if (methodName != null) {
			if (methodName == "eliminar") { 
				editsMantConDescripcion.setValue("");
		  		if(gridsMantConceptos.getTotalRecord() == 1) {
					gridsMantConceptos.clean();
		        	dlgWait.hide();
		  		}
		  		else 
		  			this.buscar();
	        }
	        else 
	  			this.buscar();
	    }
		else {
	  		editsMantConDescripcion.setValue("");
	  		gridsMantConceptos.clean();
			Tool.cnnSrv('MantObject', 'getMantConceptosInit', this.windowName + '.loadDataInit()');
		}
		editsMantConDescripcion.hideId = '';
  	},
  	
  	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsMantConceptos, pcbMantConPagCarrera, 0, 1, json('getCarrera'));
		pcbMantConPagCarrera.setSizeHeight(200);
		Tool.loadPowerComboData(dialogsMantConceptos, pcbMantConTipPersona, 0, 1, json('getMantTipPersona'));
		pcbMantConTipPersona.setSizeHeight(540);
        this.buscar();
    },
  	
  	setData : function() {
		var rlx = xmlStructs.createRecordList("rlx");

		if (gridsMantConceptos.getDataCell(1) != "") {
			editsMantConDescripcion.hideId = gridsMantConceptos.getDataCell(11);
			editsMantConDescripcion.setValue(gridsMantConceptos.getDataCell(2));
			
			if (gridsMantConceptos.getDataCell(16) == 1) {
				editsMantConMonto.readOnly(true);
				dialogsMantConceptos.setMsg("*****CONCEPTO: " + editsMantConDescripcion.getValue() + " esta relacionado con Rubros.*****");
			}
			else {
				editsMantConMonto.readOnly(false);
				dialogsMantConceptos.setMsg("");				
			}
				
	  		editsMantConMonto.setValue(gridsMantConceptos.getDataCell(3));
	  		pcbMantConConInscripcion.findOption(gridsMantConceptos.getDataCell(4));
	  		pbcMantConFinanciable.findOption(gridsMantConceptos.getDataCell(5));
	  		pbcMantConDonacion.findOption(gridsMantConceptos.getDataCell(6));
	  		pbcMantConUC.findOption(gridsMantConceptos.getDataCell(7));
	  		pcbMantConPagUnico.findOption(gridsMantConceptos.getDataCell(14));
	  		pcbMantConEstConcepto.findOption(gridsMantConceptos.getDataCell(15));
	  		editsMantConPorPagoMed.setValue(gridsMantConceptos.getDataCell(17));

	  		if (gridsMantConceptos.getDataCell(5) == "NO") {
	  			editsMantConNumCuotas.setValue("12");
	  			editsMantConInicial.setValue("0");
	  			editsMantConDiaPago.setValue("6");
	  	  		editsMantConPorDecuento.setValue("0");
	  	  		editsMantConPorMora.setValue("0");
	  			editsMantConNumCuotas.readOnly(true);
	  			editsMantConInicial.readOnly(true);
	  			editsMantConDiaPago.readOnly(true);
	  	  		editsMantConPorDecuento.readOnly(true);
	  	  		editsMantConPorMora.readOnly(true);
	  		}
	  		else {
		  		editsMantConNumCuotas.setValue(gridsMantConceptos.getDataCell(8));
		  		editsMantConInicial.setValue(gridsMantConceptos.getDataCell(9));
		  		editsMantConDiaPago.setValue(gridsMantConceptos.getDataCell(10));
		  		editsMantConPorDecuento.setValue(gridsMantConceptos.getDataCell(12));
		  		editsMantConPorMora.setValue(gridsMantConceptos.getDataCell(13));
		  		editsMantConNumCuotas.readOnly(false);
		  		editsMantConInicial.readOnly(false);
		  		editsMantConDiaPago.readOnly(false);
	  	  		editsMantConPorDecuento.readOnly(false);
	  	  		editsMantConPorMora.readOnly(false);
	  		}
			imgButtonsMantConAgregar.setDisable();
			imgButtonsMantConModificar.setEnable();
			imgButtonsMantConEliminar.setEnable();

	  		pcbMantConPagCarrera.clearChecks();
	  		pcbMantConPagCarrera.setSelectedIndex(0);
	  		pcbMantConTipPersona.clearChecks();
			pcbMantConTipPersona.setSelectedIndex(0);

			rlx.addInt('reg', editsMantConDescripcion.hideId);
			Tool.cnnSrv('MantObject', 'getMantConceptosCarrera', this.windowName + '.loadConcep()', rlx);
        }     			
	},

	loadConcep: function() {
		var rlx = xmlStructs.createRecordList("rlx");

		pcbMantConPagCarrera.setCheckEnable(json('getMantConceptosCarrera').data[0]);
		rlx.addInt('reg', editsMantConDescripcion.hideId);
		rlx.addStr('reg', 'conc');
		Tool.cnnSrv('MantObject', 'getMantPersonaTipo', this.windowName + '.loadTipoPers()', rlx);
	},

    loadTipoPers: function() {
		pcbMantConTipPersona.setCheckEnable(json('getTipoPersPers').data[0]);
		dlgWait.hide();
	},

	habilitaDetalle : function() {
		var f = true
		if (pbcMantConFinanciable.getValue()=='SI') f = false;
		editsMantConNumCuotas.readOnly(f);
		editsMantConDiaPago.readOnly(f);
		editsMantConInicial.readOnly(f);	
		editsMantConPorDecuento.readOnly(f);
  	  	editsMantConPorMora.readOnly(f);
	},
  	
  	setEvents : function() {
  		gridsMantConceptos.onClickCells(this.windowName + ".setData()");
  		editsMantConDescripcion.onEnter(this.windowName + ".buscar()");
  		pbcMantConFinanciable.onChange(this.windowName + ".habilitaDetalle()");
  		imgButtonsMantConAgregar.onClick(this.windowName + ".coreUpdate('agregar')");
		imgButtonsMantConModificar.onClick(this.windowName + ".coreUpdate('modificar')");
		imgButtonsMantConEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
  		imgButtonsMantConLimpiar.onClick(this.windowName + ".limpiar()");
		imgButtonsMantConReporte.onClick(this.windowName + ".reporte()");
  		imgButtonsMantConBuscar.onClick(this.windowName + ".buscar()");
  		imgButtonsMantConSalir.onClick('dialogsMantConceptos.close()');
  		editsMantConNumCuotas.onBlur(this.windowName + ".validaNuMaxCuota()");
  	},
	
    validaNuMaxCuota : function() {
		if (editsMantConNumCuotas.getValue() > 12) {
			editsMantConNumCuotas.setValue("12");
			Alert.show('SOLO PUEDE COLOCAR HASTA 12 CUOTAS', 'SISTEMA', Alert.TYPE_INFO);
		}
	},	
	
    buscar : function() {
  		gridsMantConceptos.clean(); 
  		imgButtonsMantConAgregar.setEnable();
  		imgButtonsMantConModificar.setDisable();
  		imgButtonsMantConEliminar.setDisable();
		Tool.getGridData("MantObject", "get"+this.windowName, dialogsMantConceptos, gridsMantConceptos, false, editsMantConDescripcion, editsMantConDescripcion, pcbMantConPagCarrera, pcbMantConPagCarrera); 		    		
    },	
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,30);
        rep.setNoRepeatHead();
        rep.setHeadImage(imgEduca.banner,true);		
		//rep.addImage(5,20,792,95,'images/logo/CSLACHINITA_banner.jpg',false);
		rep.addBar(2,96,1128,98,rep.getRGBAObj(0,0,0,0.8),false);	
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'helvetica','bold');
		rep.addText(270, 120, 'SERVICIOS DISPONIBLES',false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','bold');
        rep.addBar(0,122,1128,127,rep.getRGBAObj(187,196,238,0.8),false);		
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica', 0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 14);
		rep.addTable('TablaRepoConceptos',['SERVICIO','CONCEPTO','PRECIO'],392,140);
		rep.setTotalRowTable(33);
		rep.setHeightRow(25);
        rep.setSizeColumnArray([109,590,100/*,182,57,53,104,116*/]);
        rep.setAlignData(['center','left','center']); 
        rep.addJsonData('TablaRepoConceptos','getMantConceptos',[0,1,2]);		
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),10,'courier','bold');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
		
    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
  		if (pcbMantConPagCarrera.valid(dialogsMantConceptos))
	  		if (pcbMantConTipPersona.valid(dialogsMantConceptos))
		  		if (editsMantConDescripcion.valid(dialogsMantConceptos))
		  			if (pcbMantConPagUnico.valid(dialogsMantConceptos))
	  					if (pcbMantConEstConcepto.valid(dialogsMantConceptos))
	  						if (editsMantConMonto.valid(dialogsMantConceptos))
	  							if (pcbMantConConInscripcion.valid(dialogsMantConceptos))
	  								if (pbcMantConUC.valid(dialogsMantConceptos))
	  									if (pbcMantConFinanciable.valid(dialogsMantConceptos))
	  										if (pbcMantConDonacion.valid(dialogsMantConceptos))
	  											if (pbcMantConFinanciable.getOption() == "NO" || editsMantConNumCuotas.valid(dialogsMantConceptos))
	  												if (pbcMantConFinanciable.getOption() == "NO" || editsMantConInicial.valid(dialogsMantConceptos))
	  													if (pbcMantConFinanciable.getOption() == "NO" || editsMantConDiaPago.valid(dialogsMantConceptos))  
	  		  												if (pbcMantConFinanciable.getOption() == "NO" || editsMantConPorDecuento.valid(dialogsMantConceptos))
	  		  													if (pbcMantConFinanciable.getOption() == "NO" || editsMantConPorMora.valid(dialogsMantConceptos)) { 
			  														if (methodName == 'eliminar') 
			  															rlx.addInt('reg', editsMantConDescripcion.hideId);
			  														else {
																		rlx.add('reg',editsMantConDescripcion);
			  											 				rlx.add('reg',editsMantConMonto);
			  											 				rlx.add('reg',pbcMantConFinanciable);
			  											 				rlx.add('reg',pcbMantConConInscripcion);
			  											 				rlx.add('reg',pbcMantConUC);
			  	  														rlx.add('reg',editsMantConNumCuotas);
			  											 			 	rlx.add('reg',editsMantConInicial);
			  											 				rlx.add('reg',editsMantConDiaPago);
			  											 				rlx.add('reg',editsMantConPorDecuento);
			  											 				rlx.add('reg',editsMantConPorMora);
			  											 				rlx.add('reg',pcbMantConPagUnico);
			  											 				rlx.add('reg',pcbMantConEstConcepto);
			  											 				rlx.add('reg',pbcMantConDonacion);
			  											 				rlx.add('reg',pcbMantConPagCarrera);
																		rlx.add('reg',pcbMantConTipPersona);
																		rlx.add('reg',editsMantConPorPagoMed);
			  														 	if (methodName == 'modificar') rlx.addInt('reg', editsMantConDescripcion.hideId);
			  														}
			  														Tool.cnnSrv('MantObject', methodName + this.windowName, this.windowName + ".limpiar('" + methodName + "')", rlx);
																}
	}
};