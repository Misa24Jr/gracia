var dialogsAjusCuotas = {};
var pcbAjusCuoPeriodo = {};
var pcbAjusCuoConcepto = {};
var pcbAjusCuoCarrera = {};
var calendarAjusCuofec1 = {};
var calendarAjusCuofec2 = {};
var editsAjusCuoCi = {};
var editsAjusCuoNombre = {};
var editsAjusCuoApellido = {};
var editsAjusCuoMonto = {};
var pcbAjusCuoEstado = {};
var editsAjusCuoMes = {};
var memoAjusCuoObservaciones = {};
var gridsAjusCuentas = {};
var imgButtonsAjusCueGuardar = {};
var imgButtonsAjusCueEliminar = {};
var imgButtonsAjusCueLimpiar = {};
var imgButtonsAjusCueBuscar = {};
var imgButtonsAjusCueSalir = {};
var mwAjusCuotas = {};// minWindow

var AjusCuotas = {
    windowName: 'AjusCuotas',
    isCreate: false,
    idCuota: 0,
    idCredito: 0,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsAjusCuotas.isByClean()) 
            this.limpiar();
        dialogsAjusCuotas.show();
    },
    
    hide: function() {
        dialogsAjusCuotas.hide();
    },
    
    createMWs: function() {
        mwAjusCuotas = desktop.addMinWindow('A.Cuotas', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsAjusCuotas.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },
    
    dialogsAjusCuotas_Init: function() {
    	dialogsAjusCuotas.setMinimizeXY(0, 0);
        dialogsAjusCuotas.setCenterScreen();
        dialogsAjusCuotas.addSpace(0, 0, 20);
        dialogsAjusCuotas.addLn(1, 1, 1);
		dialogsAjusCuotas.setHeightCell(1,1,10);  
		dialogsAjusCuotas.addObjToDialog(pcbAjusCuoPeriodo, 2, 1,24);
        dialogsAjusCuotas.addObjToDialog(pcbAjusCuoCarrera, 2, 1,24);
        dialogsAjusCuotas.addObjToDialog(pcbAjusCuoConcepto, 2, 1,24);
		dialogsAjusCuotas.adjAllMarginObj(2, 1, 8);
		dialogsAjusCuotas.addLn(3, 1, 1);
		dialogsAjusCuotas.setHeightCell(3,1,12); 
		var c1 = container.create("c1",'Tipo de Ajuste', 2);
		c1.setDimension(742,88);
		c1.setMarginLeftBarTitle(20);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#1e1e1e');
		c1.addObject(calendarAjusCuofec1.getEditCalendar(), 30,90);
    	c1.addObject(calendarAjusCuofec2.getEditCalendar(), 250,90);
    	c1.addObject(editsAjusCuoCi, 30,123);
    	c1.addObject(editsAjusCuoNombre, 250,123);
    	c1.addObject(editsAjusCuoApellido, 510,123);
    	dialogsAjusCuotas.addObjToDialog(c1, 4, 1);
    	dialogsAjusCuotas.addLn(5, 1, 1);
		dialogsAjusCuotas.setHeightCell(5,1,10);
    	dialogsAjusCuotas.addObjToDialog(editsAjusCuoMonto, 6, 1,24);
        dialogsAjusCuotas.addObjToDialog(pcbAjusCuoEstado, 6, 1,24);
        dialogsAjusCuotas.addObjToDialog(editsAjusCuoMes, 6, 1,24);
		dialogsAjusCuotas.adjAllMarginObj(6, 1, 8);
		dialogsAjusCuotas.addObject(memoAjusCuoObservaciones, 20, 203);
		dialogsAjusCuotas.addObject(gridsAjusCuentas.getObject(), 20,260);
		dialogsAjusCuotas.addLn(7, 1, 1);
		dialogsAjusCuotas.setHeightCell(7,1,371);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueGuardar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueEliminar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueLimpiar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueBuscar, 8, 1);
        dialogsAjusCuotas.addObjToDialog(imgButtonsAjusCueSalir, 8, 1);
        dialogsAjusCuotas.adjAllMarginObj(8, 1, 24);
        dialogsAjusCuotas.leftMarginObj(8,1,0,95);
    },
    
    gridsAjusCuentas_Init: function() {
        gridsAjusCuentas.setFixColRow(false, true);
        gridsAjusCuentas.addTitleVectorX(['Cedula','Servicio','Concepto','Monto','Estado','Mes','Fecha Vencimiento','Observación','idEdoFinan','idCuota','idConcepto','idCredito','idCarrera','nombre','apellido']);
        gridsAjusCuentas.showData();
        gridsAjusCuentas.setSizeCol(1, 85);
        gridsAjusCuentas.setSizeCol(2, 120);
        gridsAjusCuentas.setSizeCol(3, 201);
        gridsAjusCuentas.setSizeCol(4, 50);
        gridsAjusCuentas.setSizeCol(5, 80);
        gridsAjusCuentas.setSizeCol(6, 80);
        gridsAjusCuentas.setSizeCol(7, 120);
        gridsAjusCuentas.setSizeCol(8, 0);
        gridsAjusCuentas.setSizeCol(9, 0);
        gridsAjusCuentas.setSizeCol(10, 0);
        gridsAjusCuentas.setSizeCol(11, 0);
        gridsAjusCuentas.setSizeCol(12, 0);
        gridsAjusCuentas.setSizeCol(13, 0);
        gridsAjusCuentas.setSizeCol(14, 0);
        gridsAjusCuentas.setSizeCol(15, 0);
        gridsAjusCuentas.hideCol(8);
        gridsAjusCuentas.hideCol(9);
        gridsAjusCuentas.hideCol(10);
        gridsAjusCuentas.hideCol(11);
        gridsAjusCuentas.hideCol(12);
        gridsAjusCuentas.hideCol(13);
        gridsAjusCuentas.hideCol(14);
        gridsAjusCuentas.hideCol(15);
    },
    
    create: function() {
        dialogsAjusCuotas = dialogs.create('dialogsAjusCuotas', 0, 0, 785, 569, 'AJUSTE DE CUOTAS');
        dialogsAjusCuotas.setAdjY(20);
        pcbAjusCuoPeriodo = powerComboBox.create('pcbAjusCuoPeriodo', 'pcbAjusCuoPeriodo', 'Periodo (+):', 1, 113);
        pcbAjusCuoPeriodo.setValidEmpty();
        pcbAjusCuoPeriodo.addEmptyOption();
        pcbAjusCuoPeriodo.enableReadOnlyEditor();
        pcbAjusCuoCarrera = powerComboBox.create('pcbAjusCuoCarrera', 'pcbAjusCuoCarrera', 'Servicio (*):', 1, 80);
        pcbAjusCuoCarrera.setValidEmpty();
        pcbAjusCuoCarrera.addEmptyOption();
        pcbAjusCuoCarrera.enableReadOnlyEditor();
        pcbAjusCuoCarrera.setFieldFind(true);
        pcbAjusCuoConcepto = powerComboBox.create('pcbAjusCuoConcepto', 'pcbAjusCuoConcepto', 'Concepto (*):', 1, 80);
        pcbAjusCuoConcepto.setValidEmpty();
        pcbAjusCuoConcepto.addEmptyOption();
        pcbAjusCuoConcepto.enableReadOnlyEditor();
        pcbAjusCuoConcepto.setFieldFind(true);
        calendarAjusCuofec1 = calendars.create('calendarAjusCuofec1');      
		calendarAjusCuofec1.setWidthEditCalendar(70);
    	calendarAjusCuofec1.setCaption('Desde:',1,69);
    	calendarAjusCuofec1.sendToFrom(100);
      	calendarAjusCuofec1.setValidEmpty();
      	calendarAjusCuofec1.setFieldFind(true);
      	calendarAjusCuofec2 = calendars.create('calendarAjusCuofec2');      
		calendarAjusCuofec2.setWidthEditCalendar(70);
    	calendarAjusCuofec2.setCaption('Hasta:',1,80);
    	calendarAjusCuofec2.sendToFrom(100);
      	calendarAjusCuofec2.setValidEmpty();
      	calendarAjusCuofec2.setFieldFind(true);
      	calendarAjusCuofec1.setValidGreaterThan(calendarAjusCuofec2);
      	editsAjusCuoCi = edits.create('editsAjusCuoCi', 'editsAjusCuoCi', 'C.i. (*):', 1, 69, 'normal');
    	editsAjusCuoCi.setSizeEdit(92);
        editsAjusCuoCi.setValidInteger();
        editsAjusCuoCi.setFieldFind(true);
        editsAjusCuoNombre = edits.create('editsAjusCuoNombre', 'editsMantCuoPorcentaje', 'Nombre (*):', 1, 80, 'normal');
    	editsAjusCuoNombre.setSizeEdit(149);
        editsAjusCuoNombre.setValidEmpty();
        editsAjusCuoNombre.setFieldFind(true);
		editsAjusCuoApellido = edits.create('editsAjusCuoApellido', 'editsAjusCuoApellido', 'Apellido (*):', 1, 80, 'normal');
    	editsAjusCuoApellido.setSizeEdit(149);
        editsAjusCuoApellido.setValidEmpty();
        editsAjusCuoApellido.setFieldFind(true);
		editsAjusCuoMonto = edits.create('editsAjusCuoMonto', 'editsAjusCuoMonto', 'Monto:', 1, 113, 'normal');
    	editsAjusCuoMonto.setSizeEdit(148);
        editsAjusCuoMonto.setValidReal();
		pcbAjusCuoEstado = powerComboBox.create('pcbAjusCuoEstado', 'pcbAjusCuoEstado', 'Estado (*):', 1, 80);
        pcbAjusCuoEstado.setValidEmpty();
        pcbAjusCuoEstado.addEmptyOption();
        pcbAjusCuoEstado.enableReadOnlyEditor();
        pcbAjusCuoEstado.setFieldFind(true);
		editsAjusCuoMes = edits.create('editsAjusCuoMes', 'editsAjusCuoMes', 'Mes :', 1, 82, 'normal');
    	editsAjusCuoMes.setSizeEdit(149);
    	editsAjusCuoMes.readOnly(true);
		memoAjusCuoObservaciones = memo.create('memoAjusCuoObservaciones','Observación:', 1, 0, 112);
		memoAjusCuoObservaciones.vAlignCaption('middle');
		memoAjusCuoObservaciones.setDimension(628, 40);
		memoAjusCuoObservaciones.setMaxLength(300);
		memoAjusCuoObservaciones.setValidEmpty(); 
		memoAjusCuoObservaciones.style.zIndex = 1000;
        gridsAjusCuentas = grids.create('gridsAjusCuentas', 12, 15);
        imgButtonsAjusCueGuardar = imgButtons.create('imgButtonsAjusCueGuardar', 'Guardar', 'ok.png');
        imgButtonsAjusCueEliminar = imgButtons.create('imgButtonsAjusCueEliminar', 'Eliminar', 'eliminar.jpg');
        imgButtonsAjusCueLimpiar = imgButtons.create('imgButtonsAjusCueLimpiar', 'Limpiar', 'limpiar.png');
        imgButtonsAjusCueBuscar = imgButtons.create('imgButtonsAjusCueBuscar', 'Buscar', 'icono_buscar.png');
        imgButtonsAjusCueSalir = imgButtons.create('imgButtonsAjusCueSalir', 'Salir', 'salir.png');
        imgButtonsAjusCueGuardar.setDimension(90, 22);
        imgButtonsAjusCueEliminar.setDimension(90, 22);
        imgButtonsAjusCueLimpiar.setDimension(90, 22);
        imgButtonsAjusCueBuscar.setDimension(90, 22);
        imgButtonsAjusCueSalir.setDimension(90, 22);
    },
    
    init: function() {
        this.create();
        this.setEvents();
        this.dialogsAjusCuotas_Init();
        this.gridsAjusCuentas_Init();
        this.createMWs();
    },

   	buscar : function() {
  		if (pcbAjusCuoPeriodo.valid(dialogsAjusCuotas)) {
  	  		this.idCuota = 0;
  	  		this.idCredito = 0;

			if (calendarAjusCuofec1.getFechaFromEdit() != '' && calendarAjusCuofec1.getFechaFromEdit() != '') {
	        	imgButtonsAjusCueGuardar.setEnable();
				imgButtonsAjusCueEliminar.setDisable();
	    		Tool.getGridData('MantObject', 'getAjusteCuota', dialogsAjusCuotas, gridsAjusCuentas, false, new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), pcbAjusCuoConcepto, pcbAjusCuoConcepto, pcbAjusCuoPeriodo, calendarAjusCuofec1, calendarAjusCuofec2, calendarAjusCuofec2, calendarAjusCuofec2, pcbAjusCuoEstado, pcbAjusCuoEstado, pcbAjusCuoCarrera, pcbAjusCuoCarrera);
			}
	    	else if (editsAjusCuoCi.getValue() != '' && editsAjusCuoNombre.getValue() != '' && editsAjusCuoApellido.getValue() != '') {
	        	editsAjusCuoMonto.clear();
	        	editsAjusCuoMes.clear();
	        	memoAjusCuoObservaciones.clear();
	    		gridsAjusCuentas.clean();
	        	imgButtonsAjusCueGuardar.setEnable();
	    		imgButtonsAjusCueEliminar.setEnable();
	    		Tool.getGridData('MantObject', 'getAjusteCuota', dialogsAjusCuotas, gridsAjusCuentas, false, new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), new MiniDataSet(editsAjusCuoCi.hideId, 'int', true), pcbAjusCuoConcepto, pcbAjusCuoConcepto, pcbAjusCuoPeriodo, calendarAjusCuofec1, calendarAjusCuofec2, calendarAjusCuofec2, calendarAjusCuofec2, pcbAjusCuoEstado, pcbAjusCuoEstado, pcbAjusCuoCarrera, pcbAjusCuoCarrera);
			}
			else if (editsAjusCuoCi.getValue() != '' || editsAjusCuoNombre.getValue() != '' || editsAjusCuoApellido.getValue() != '') {
	        	ResuBusqueda.setObjectExtFnc(editsAjusCuoCi, editsAjusCuoNombre, editsAjusCuoApellido, 'AjusCuotas.buscar()');
				Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsAjusCuoCi, editsAjusCuoCi, editsAjusCuoNombre, editsAjusCuoNombre, editsAjusCuoApellido, editsAjusCuoApellido);
			}
			else {
				Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
			}
  		}
   	},
    
    loadDataPeridoConcepto: function() {
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoPeriodo, 0, 1, json('getPeriodoTodo'));
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoCarrera, 0, 1, json('getTodaCarrera'));
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoConcepto, 0, 1, json('getConceptoFinanciado'));
  		Tool.loadPowerComboData(dialogsAjusCuotas, pcbAjusCuoEstado, 0, 1, json('getEdoFinanciado'));
  		pcbAjusCuoPeriodo.setSelectedIndex(1);
  		if (json('getConceptoFinanciado').data[0].length == 1)
  			pcbAjusCuoConcepto.setSelectedIndex(1);
    },
    
    setData: function() {
        if (gridsAjusCuentas.getDataCell(1) != "") {
        	if (gridsAjusCuentas.getDataCell(5) == 'PENDIENTE' || gridsAjusCuentas.getDataCell(5) == 'EXONERADA') {
				editsAjusCuoCi.setValue(gridsAjusCuentas.getDataCell(1));
	        	editsAjusCuoMonto.setValue(gridsAjusCuentas.getDataCell(4));
	        	pcbAjusCuoConcepto.findOption(gridsAjusCuentas.getDataCell(11));
	        	pcbAjusCuoEstado.findOption(gridsAjusCuentas.getDataCell(9));
	        	editsAjusCuoMes.setValue(gridsAjusCuentas.getDataCell(6));
	        	memoAjusCuoObservaciones.setText(gridsAjusCuentas.getDataCell(8));
	      		this.idCuota = gridsAjusCuentas.getDataCell(10);
	      		this.idCredito = gridsAjusCuentas.getDataCell(12);
	        	pcbAjusCuoCarrera.findOption(gridsAjusCuentas.getDataCell(13));
	        	editsAjusCuoNombre.setValue(gridsAjusCuentas.getDataCell(14))
	        	editsAjusCuoApellido.setValue(gridsAjusCuentas.getDataCell(15))
	        	imgButtonsAjusCueEliminar.setEnable();
        	}
			else
				Alert.show('Debe elegir un estado PENDIENTE y/o una cuota con estado diferente a CANCELADA o ABONO.', 'SISTEMA', Alert.TYPE_INFO);
        }
    },

	limpiarFind : function(ix) {
		editsAjusCuoCi.hideId = -1;
  		this.idCuota = 0;
  		this.idCredito = 0;
    	calendarAjusCuofec1.clear();
    	calendarAjusCuofec2.clear();
    	editsAjusCuoMonto.clear();
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.clear();
    	memoAjusCuoObservaciones.clear();
		gridsAjusCuentas.clean();
		dialogsAjusCuotas.setMsg("");

		if (json('getConceptoFinanciado').data[0].length == 1)
			pcbAjusCuoConcepto.setSelectedIndex(1);

  		switch (ix) {
		case 1: 
			editsAjusCuoNombre.clear();
			editsAjusCuoApellido.clear();  		
			break;
		case 2: 
			editsAjusCuoCi.clear();
			editsAjusCuoApellido.clear();  		
			break;
		default:
			editsAjusCuoCi.clear();
			editsAjusCuoNombre.clear();
			break;
		} 
  	},

    limpiarAlumno: function() {
    	editsAjusCuoCi.hideId = -1;
  		this.idCuota = 0;
  		this.idCredito = 0;
    	editsAjusCuoCi.clear();
        editsAjusCuoNombre.clear();
    	editsAjusCuoApellido.clear();
    	editsAjusCuoMonto.clear();
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.clear();
    	memoAjusCuoObservaciones.clear();
    	gridsAjusCuentas.clean();
        imgButtonsAjusCueEliminar.setDisable();
    },
    
    setEvents: function() {
		calendarAjusCuofec1.onSelectedDay(this.windowName + ".limpiarAlumno()");
		calendarAjusCuofec2.onSelectedDay(this.windowName + ".limpiarAlumno()");
		editsAjusCuoCi.onEnter(this.windowName + ".buscar()");
		editsAjusCuoCi.onChange(this.windowName + ".limpiarFind(1)");
		editsAjusCuoCi.onClick(this.windowName + ".limpiarFind(1)");
		editsAjusCuoNombre.onEnter(this.windowName + ".buscar()");
		editsAjusCuoNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsAjusCuoNombre.onClick(this.windowName + ".limpiarFind(2)");
		editsAjusCuoApellido.onEnter(this.windowName + ".buscar()");
		editsAjusCuoApellido.onChange(this.windowName + ".limpiarFind(3)");
		editsAjusCuoApellido.onClick(this.windowName + ".limpiarFind(3)");
		gridsAjusCuentas.onClickCells(this.windowName + ".setData()")
        imgButtonsAjusCueGuardar.onClick(this.windowName + ".coreUpdate('guardar')");
        imgButtonsAjusCueEliminar.onClick(this.windowName + ".coreUpdate('eliminar')");
        imgButtonsAjusCueLimpiar.onClick(this.windowName + ".limpiar()");
        imgButtonsAjusCueBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsAjusCueSalir.onClick('dialogsAjusCuotas.close()');
    },
    
  	limpiar: function() {
  		editsAjusCuoCi.hideId = -1;
  		this.idCuota = 0;
  		this.idCredito = 0;
    	pcbAjusCuoPeriodo.setSelectedIndex(0);
    	pcbAjusCuoCarrera.setSelectedIndex(0);
    	pcbAjusCuoConcepto.setSelectedIndex(0);
    	calendarAjusCuofec1.clear();
    	calendarAjusCuofec2.clear();
    	editsAjusCuoCi.clear();
        editsAjusCuoNombre.clear();
    	editsAjusCuoApellido.clear();
    	editsAjusCuoMonto.clear();
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.clear();
    	memoAjusCuoObservaciones.clear();
    	gridsAjusCuentas.clean();
    	imgButtonsAjusCueGuardar.setDisable();
    	imgButtonsAjusCueEliminar.setDisable();
        dialogsAjusCuotas.setMsg("");
		Tool.cnnSrv("MantObject", "getPeriodoConcepto", this.windowName + ".loadDataPeridoConcepto()");
    },

	limpiarCoreUpdate : function(methodName) {
    	editsAjusCuoMonto.clear();
    	pcbAjusCuoEstado.setSelectedIndex(1);
    	editsAjusCuoMes.clear();
    	memoAjusCuoObservaciones.clear();
    	imgButtonsAjusCueGuardar.setDisable();
    	imgButtonsAjusCueEliminar.setDisable();
		if (methodName == 'eliminar' && (this.idCuota == 0 || gridsAjusCuentas.getTotalRecord() == 1)) {
	  		this.idCuota = 0;
	  		this.idCredito = 0;
	    	gridsAjusCuentas.clean();
			dlgWait.hide();
		}			
		else {
	  		this.idCuota = 0;//SE DUPLICO POR COMUNICACION ASINCRONA AL METODO: this.buscar();
	  		this.idCredito = 0;
			this.buscar();
		}
	},
    
    coreUpdate : function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		auxName = "";
		
  		if (pcbAjusCuoPeriodo.valid(dialogsAjusCuotas))		
			if (pcbAjusCuoConcepto.valid(dialogsAjusCuotas))
				if (methodName == 'eliminar' || editsAjusCuoMonto.valid(dialogsAjusCuotas))
					if (pcbAjusCuoEstado.valid(dialogsAjusCuotas))
						if (methodName == 'eliminar' || memoAjusCuoObservaciones.valid(dialogsAjusCuotas))
							if (pcbAjusCuoEstado.getOption() == 'PENDIENTE' || pcbAjusCuoEstado.getOption() == 'EXONERADA') {
								if (methodName == 'guardar') {
						  			if (calendarAjusCuofec1.getFechaFromEdit() != '' && calendarAjusCuofec1.getFechaFromEdit() != '' && this.idCuota == 0) {
						  				if (pcbAjusCuoConcepto.valid(dialogsAjusCuotas))
						  					if (calendarAjusCuofec1.valid(dialogsAjusCuotas))
						  	  					if (calendarAjusCuofec2.valid(dialogsAjusCuotas)) {
													rlx.add('reg', editsAjusCuoMonto);
													rlx.add('reg', pcbAjusCuoEstado);
													rlx.add('reg', memoAjusCuoObservaciones);
													rlx.add('reg', calendarAjusCuofec1);
													rlx.add('reg', calendarAjusCuofec2);
													rlx.add('reg', pcbAjusCuoConcepto);
													rlx.add('reg', pcbAjusCuoPeriodo);
													rlx.add('reg', pcbAjusCuoEstado);
													rlx.add('reg', pcbAjusCuoCarrera);
													rlx.add('reg', pcbAjusCuoCarrera);
													auxName = "Lote";
						  	  					}
					  				}
					  				else {
										rlx.add('reg', editsAjusCuoMonto);
										rlx.add('reg', pcbAjusCuoEstado);
										rlx.add('reg', memoAjusCuoObservaciones);
										rlx.addInt('reg', this.idCuota);
										rlx.addInt('reg', editsAjusCuoCi.hideId);
										rlx.add('reg', pcbAjusCuoConcepto);
										rlx.add('reg', pcbAjusCuoCarrera);
										rlx.add('reg', pcbAjusCuoPeriodo);
					  	  			}
								}
								else if (methodName == 'eliminar') {
									rlx.addInt('reg', this.idCuota);
									rlx.addInt('reg', this.idCredito);
									rlx.addInt('reg', editsAjusCuoCi.hideId);
									rlx.add('reg',pcbAjusCuoPeriodo);
									rlx.add('reg', pcbAjusCuoConcepto);
								}
								Tool.cnnSrv("MantObject", methodName + "AjusteCuota" + auxName, this.windowName + ".limpiarCoreUpdate('" + methodName + "')", rlx);
							}
							else
								Alert.show('Debe elegir un estado PENDIENTE y/o una cuota con estado diferente a CANCELADA o ABONO.', 'SISTEMA', Alert.TYPE_INFO);
    }
};
