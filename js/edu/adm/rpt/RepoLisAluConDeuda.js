include('js/edu/cnt/rpt/RepoInfoAlumno');
var dialogsRepoLisAluConDeuda = {};
var pcbRepoLisAluConDeuOrg = {};
var pcbRepoLisAluConDeuSuborg = {};
var pcbRepoLisAluConDeuCarrera = {};
var pcbRepoLisAluConDeuPeriodo = {};
var calendarsRepoLisAluConDeuDesde = {};
var calendarsRepoLisAluConDeuHasta = {};
var pcbRepoLisAluConDeuConcepto = {};
var editsRepoLisAluConDeuCi = {};
var editsRepoLisAluConDeuNombre = {};
var editsRepoLisAluConDeuApellido = {};
var editsRepoLisAluConDeuTotal = {};
var imgButtonsRepoLisAluConDeuBloUsuario = {};
var gridsRepoLisAluConDeuda = {};
var imgButtonsRepoLisAluConDeuRepre = {};
var imgButtonsRepoLisAluConDeuReporte = {};
var imgButtonsRepoLisAluConDeuEnviarSms = {};
var imgButtonsRepoLisAluConDeuEnviarEmail = {};
var imgButtonsRepoLisAluConDeuLimpiar = {};
var imgButtonsRepoLisAluConDeuBuscar = {};
var imgButtonsRepoLisAluConDeuSalir = {};
var mwRepoLisAluConDeuda = {};// minWindow

var RepoLisAluConDeuda = {
    windowName : 'RepoLisAluConDeuda',
    isCreate: false,
    
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        
        if (dialogsRepoLisAluConDeuda.isByClean())
			this.limpiar();			
		dialogsRepoLisAluConDeuda.show();
	},
	
    hide: function(){
        dialogsRepoLisAluConDeuda.hide();
    },
    
    createMWs: function(){
        mwRepoLisAluConDeuda = desktop.addMinWindow('Cliente Deuda', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoLisAluConDeuda.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoLisAluConDeuda_Init : function(){
      	dialogsRepoLisAluConDeuda.setMinimizeXY(0,0);
      	dialogsRepoLisAluConDeuda.setCenterScreen();
      	dialogsRepoLisAluConDeuda.addSpace(0,0,20);
      	dialogsRepoLisAluConDeuda.addLn(1,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(1,1,13);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuOrg,2,1,24);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuSuborg,2,1,24);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuCarrera,2,1,24);
		dialogsRepoLisAluConDeuda.adjAllMarginObj(2,1,20);
		dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuPeriodo,3,1,24);
		dialogsRepoLisAluConDeuda.adjAllMarginObj(3,1,20);
      	dialogsRepoLisAluConDeuda.addObjToDialog(calendarsRepoLisAluConDeuDesde.getEditCalendar(),3,1,24);
    	dialogsRepoLisAluConDeuda.addObjToDialog(calendarsRepoLisAluConDeuHasta.getEditCalendar(),3,1,24);
      	dialogsRepoLisAluConDeuda.adjAllMarginObj(3,1,20);
      	dialogsRepoLisAluConDeuda.addObjToDialog(pcbRepoLisAluConDeuConcepto,4,1,24);
    	dialogsRepoLisAluConDeuda.addLn(5,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(5 ,1,15); 
    	var c1 = container.create("c1",'Cliente / Representante:',1);
		c1.setDimension(881,50);
		c1.setMarginLeftBarTitle(115);
		c1.setPropertyMarco('groove',1,'#7e7e7e');
		c1.setFontTitle('verdana', 11, '#7e7e7e');
		c1.addObject(editsRepoLisAluConDeuCi, 40, 140);
		c1.addObject(editsRepoLisAluConDeuNombre, 313, 140);
		c1.addObject(editsRepoLisAluConDeuApellido, 628, 140);
		dialogsRepoLisAluConDeuda.addObjToDialog(c1, 6, 1);
		dialogsRepoLisAluConDeuda.addObject(gridsRepoLisAluConDeuda.getObject(),20,190);
		dialogsRepoLisAluConDeuda.addLn(7,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(7,1,356); 
		dialogsRepoLisAluConDeuda.addObjToDialog(editsRepoLisAluConDeuTotal,8,1,1);
		dialogsRepoLisAluConDeuda.leftMarginObj(8, 1, 0, 740);
		dialogsRepoLisAluConDeuda.addObject(imgButtonsRepoLisAluConDeuBloUsuario, 56,533);
		dialogsRepoLisAluConDeuda.addObject(imgButtonsRepoLisAluConDeuRepre,316,533);
		dialogsRepoLisAluConDeuda.addObject(imgButtonsRepoLisAluConDeuReporte,526,533);
		dialogsRepoLisAluConDeuda.addLn(10,1,1);
		dialogsRepoLisAluConDeuda.setHeightCell(10 ,1,18); 
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuEnviarSms,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuEnviarEmail,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuLimpiar,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuBuscar,11,1);
		dialogsRepoLisAluConDeuda.addObjToDialog(imgButtonsRepoLisAluConDeuSalir,11,1);
		dialogsRepoLisAluConDeuda.adjAllMarginObj(11, 1, 28);
		dialogsRepoLisAluConDeuda.leftMarginObj(11, 1, 0, 36);
	}, 	
		
	gridsRepoLisAluConDeuda_Init : function(){
        gridsRepoLisAluConDeuda.setFixColRow(false,true);
        gridsRepoLisAluConDeuda.addTitleVectorX(['Cedula','Apellido','Nombre','Concepto','Mes','Fecha Venc.','Abono','Monto','Deuda']);
        gridsRepoLisAluConDeuda.showData();
        gridsRepoLisAluConDeuda.setSizeCol(1,80);
        gridsRepoLisAluConDeuda.setSizeCol(2,120);
        gridsRepoLisAluConDeuda.setSizeCol(3,120);
        gridsRepoLisAluConDeuda.setSizeCol(4,177);
        gridsRepoLisAluConDeuda.setSizeCol(5,80);
        gridsRepoLisAluConDeuda.setSizeCol(6,80);
        gridsRepoLisAluConDeuda.setSizeCol(7,72);
        gridsRepoLisAluConDeuda.setSizeCol(8,72);
        gridsRepoLisAluConDeuda.setSizeCol(9,72);
   },
		
    create : function(){
    	dialogsRepoLisAluConDeuda = dialogs.create('dialogsRepoLisAluConDeuda',0,0,924,577,'CLIENTE CON DEUDA');
    	dialogsRepoLisAluConDeuda.setAdjY(30);
    	pcbRepoLisAluConDeuOrg = powerComboBox.create('pcbRepoLisAluConDeuOrg','pcbRepoLisAluConDeuOrg','Organización (+):',1,101);
    	pcbRepoLisAluConDeuOrg.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuOrg.addEmptyOption();
    	pcbRepoLisAluConDeuOrg.setValidEmpty();
    	pcbRepoLisAluConDeuOrg.setWidthCombo(150);
    	pcbRepoLisAluConDeuSuborg = powerComboBox.create('pcbRepoLisAluConDeuSuborg','pcbRepoLisAluConDeuSuborg','Suborganización (^):',1,122);
    	pcbRepoLisAluConDeuSuborg.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuSuborg.addEmptyOption();
    	pcbRepoLisAluConDeuSuborg.setValidEmpty();
    	pcbRepoLisAluConDeuSuborg.setWidthCombo(150);
    	pcbRepoLisAluConDeuCarrera = powerComboBox.create('pcbRepoLisAluConDeuCarrera','pcbRepoLisAluConDeuCarrera','Servicio (^):',1,100);
    	pcbRepoLisAluConDeuCarrera.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuCarrera.addEmptyOption();
    	pcbRepoLisAluConDeuCarrera.setValidEmpty();
    	pcbRepoLisAluConDeuCarrera.setWidthCombo(150);
    	pcbRepoLisAluConDeuCarrera.setFieldFind(true);
    	pcbRepoLisAluConDeuCarrera.enableOnChangeToEmptyOption();
    	pcbRepoLisAluConDeuPeriodo = powerComboBox.create('pcbRepoLisAluConDeuPeriodo','pcbRepoLisAluConDeuPeriodo','Año Fiscal (+):',1,101);
    	pcbRepoLisAluConDeuPeriodo.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuPeriodo.addEmptyOption();
    	pcbRepoLisAluConDeuPeriodo.setValidEmpty();
    	pcbRepoLisAluConDeuPeriodo.setWidthCombo(150);
    	pcbRepoLisAluConDeuPeriodo.enableOnChangeToEmptyOption();
    	calendarsRepoLisAluConDeuDesde = calendars.create('calendarsRepoLisAluConDeuDesde');
      	calendarsRepoLisAluConDeuDesde.setValidEmpty();
		calendarsRepoLisAluConDeuDesde.setWidthEditCalendar(150);
    	calendarsRepoLisAluConDeuDesde.setCaption('Fecha Desde (*):',1,122);
    	calendarsRepoLisAluConDeuDesde.sendToFrom(100);
    	calendarsRepoLisAluConDeuDesde.setFieldFind(true);
    	calendarsRepoLisAluConDeuHasta = calendars.create('calendarsRepoLisAluConDeuHasta');      
      	calendarsRepoLisAluConDeuHasta.setValidEmpty();
		calendarsRepoLisAluConDeuHasta.setWidthEditCalendar(150);
    	calendarsRepoLisAluConDeuHasta.setCaption('Fecha Hasta (*):',1,99);
    	calendarsRepoLisAluConDeuHasta.sendToFrom(100);
    	calendarsRepoLisAluConDeuHasta.setFieldFind(true);
    	pcbRepoLisAluConDeuConcepto = powerComboBox.create('pcbRepoLisAluConDeuConcepto','pcbRepoLisAluConDeuConcepto','Concepto (+):',1,101);
    	pcbRepoLisAluConDeuConcepto.enableReadOnlyEditor();
    	pcbRepoLisAluConDeuConcepto.addEmptyOption();
    	pcbRepoLisAluConDeuConcepto.setValidEmpty();
      	pcbRepoLisAluConDeuConcepto.setWidthCombo(464);
      	pcbRepoLisAluConDeuConcepto.setFieldFind(true);
      	editsRepoLisAluConDeuCi = edits.create('editsRepoLisAluConDeuCi', 'editsRepoLisAluConDeuCi', 'C.i. (*):', 1,81, 'normal');
      	editsRepoLisAluConDeuCi.setValidInteger();
      	editsRepoLisAluConDeuCi.setFieldFind(true);
		editsRepoLisAluConDeuCi.setSizeEdit(171);
		editsRepoLisAluConDeuCi.setMaxLength(12);
      	editsRepoLisAluConDeuNombre = edits.create('editsRepoLisAluConDeuNombre', 'editsRepoLisAluConDeuNombre', 'Nombre (*):', 1,122, 'normal');
      	editsRepoLisAluConDeuNombre.setValidEmpty();
      	editsRepoLisAluConDeuNombre.setFieldFind(true);
		editsRepoLisAluConDeuNombre.setSizeEdit(172);
		editsRepoLisAluConDeuNombre.setMaxLength(20);
      	editsRepoLisAluConDeuApellido = edits.create('editsRepoLisAluConDeuApellido', 'editsRepoLisAluConDeuApellido', 'Apellido (*):', 1,99, 'normal');
      	editsRepoLisAluConDeuApellido.setValidEmpty();
      	editsRepoLisAluConDeuApellido.setFieldFind(true);
		editsRepoLisAluConDeuApellido.setSizeEdit(172);
		editsRepoLisAluConDeuApellido.setMaxLength(20);
      	gridsRepoLisAluConDeuda = grids.create('gridsRepoLisAluConDeuda',15,9);
      	editsRepoLisAluConDeuTotal = edits.create('editsRepoLisAluConDeuTotal', 'editsRepoLisAluConDeuTotal', 'Total:', 1,39, 'normal');
      	editsRepoLisAluConDeuTotal.setSizeEdit(104);
      	editsRepoLisAluConDeuTotal.readOnly(true);
      	imgButtonsRepoLisAluConDeuBloUsuario = imgButtons.create('imgButtonsRepoLisAluConDeuBloUsuario','Bloquear Usuarios con Deuda','bloquear.gif');
      	imgButtonsRepoLisAluConDeuRepre = imgButtons.create('imgButtonsRepoLisAluConDeuRepre','Deuda Por Representante','print.png');
      	imgButtonsRepoLisAluConDeuReporte = imgButtons.create('imgButtonsRepoLisAluConDeuReporte','Deuda Por Cliente','print.png');
      	imgButtonsRepoLisAluConDeuEnviarSms = imgButtons.create('imgButtonsRepoLisAluConDeuEnviarSms', 'Enviar Sms', 'enviar_sms.png');
      	imgButtonsRepoLisAluConDeuEnviarEmail = imgButtons.create('imgButtonsRepoLisAluConDeuEnviarEmail', 'Enviar Email', 'email_4.png');
      	imgButtonsRepoLisAluConDeuLimpiar = imgButtons.create('imgButtonsRepoLisAluConDeuLimpiar', 'Limpiar', 'limpiar.png');
      	imgButtonsRepoLisAluConDeuBuscar = imgButtons.create('imgButtonsRepoLisAluConDeuBuscar', 'Buscar', 'icono_buscar.png');
      	imgButtonsRepoLisAluConDeuSalir = imgButtons.create('imgButtonsRepoLisAluConDeuSalir','Salir','salir.png');
      	imgButtonsRepoLisAluConDeuBloUsuario.setDimension(250,22);
    	imgButtonsRepoLisAluConDeuRepre.setDimension(200,22);
    	imgButtonsRepoLisAluConDeuReporte.setDimension(200,22);
    	imgButtonsRepoLisAluConDeuEnviarSms.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuEnviarEmail.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuLimpiar.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuBuscar.setDimension(110,22);
    	imgButtonsRepoLisAluConDeuSalir.setDimension(110,22);
	},

	init : function(){ 
		this.create();
		this.setEvents(); 
		this.dialogsRepoLisAluConDeuda_Init();
		this.gridsRepoLisAluConDeuda_Init();
		this.createMWs();
	},
	
    resetElements : function(element) {
		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
  		imgButtonsRepoLisAluConDeuBloUsuario.setDisable();
  		imgButtonsRepoLisAluConDeuRepre.setDisable();
  		imgButtonsRepoLisAluConDeuReporte.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarSms.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarEmail.setDisable();
    	
		if (element == 'org') {
			Tool.rstPwrCmb(pcbRepoLisAluConDeuSuborg);
	  		Tool.rstPwrCmb(pcbRepoLisAluConDeuCarrera);
	    	if (pcbRepoLisAluConDeuOrg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuSuborg, 1, 2, pcbRepoLisAluConDeuOrg);
		}
		else if (element == 'suborg') {
	  		Tool.rstPwrCmb(pcbRepoLisAluConDeuCarrera);
	    	if (pcbRepoLisAluConDeuSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuCarrera, -1, 3, pcbRepoLisAluConDeuSuborg);
		}
		else if (element == 'carr') {
	    	if (pcbRepoLisAluConDeuCarrera.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuPeriodo, 0, 1, pcbRepoLisAluConDeuCarrera.setModeReturnGetText(5));
		}
		else if (element == 'carrInit') {
	    	if (pcbRepoLisAluConDeuCarrera.getOption() != "") {
	    		Tool.getPowerComboDataFnc('pcbRepoLisAluConDeuPeriodo.setSelectedIndex(1);calendarsRepoLisAluConDeuHasta.setFechaToEdit(Tool.getDate());', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuPeriodo, 0, 1, pcbRepoLisAluConDeuCarrera.setModeReturnGetText(5));
	    		pcbRepoLisAluConDeuCarrera.setSelectedIndex(0);
	    	}
		}
	},
	
	limpiarFind : function(ix) {
		editsRepoLisAluConDeuCi.hideId = -1;
		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
  		imgButtonsRepoLisAluConDeuBloUsuario.setDisable();
  		imgButtonsRepoLisAluConDeuRepre.setDisable();
  		imgButtonsRepoLisAluConDeuReporte.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarSms.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarEmail.setDisable();
		dialogsRepoLisAluConDeuda.setMsg("");
		
  		switch (ix) {
		case 1: 
			editsRepoLisAluConDeuNombre.setValue("");
			editsRepoLisAluConDeuApellido.setValue("");  		
			break;
		case 2: 
			editsRepoLisAluConDeuCi.setValue("");
			editsRepoLisAluConDeuApellido.setValue("");  		
			break;
		default:
			editsRepoLisAluConDeuCi.setValue("");
			editsRepoLisAluConDeuNombre.setValue("");
			break;
		} 
  	},

  	limpiar : function() {
  		editsRepoLisAluConDeuCi.hideId = -1;
  		pcbRepoLisAluConDeuOrg.setSelectedIndex(0);
  		Tool.rstPwrCmb(pcbRepoLisAluConDeuSuborg);
  		Tool.rstPwrCmb(pcbRepoLisAluConDeuCarrera);
  		pcbRepoLisAluConDeuPeriodo.setSelectedIndex(0);
  		calendarsRepoLisAluConDeuDesde.clear();
  		calendarsRepoLisAluConDeuHasta.clear();
  		Tool.rstPwrCmb(pcbRepoLisAluConDeuConcepto);	
  		editsRepoLisAluConDeuCi.setValue("");
  		editsRepoLisAluConDeuNombre.setValue("");
  		editsRepoLisAluConDeuApellido.setValue("");
  		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
  		imgButtonsRepoLisAluConDeuBloUsuario.setDisable();
  		imgButtonsRepoLisAluConDeuRepre.setDisable();
  		imgButtonsRepoLisAluConDeuReporte.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarSms.setDisable();
  		imgButtonsRepoLisAluConDeuEnviarEmail.setDisable();
  		dialogsRepoLisAluConDeuda.setMsg("");
  		Tool.cnnSrv("MsjObject", "getRepoLisAluConDeudaInit", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuOrg, 0, 1, json('getData'));
		Tool.loadPowerComboData(dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuConcepto, 0, 1, json('getConceptoFinanciado'));
		Tool.getContext(dialogsRepoLisAluConDeuda, pcbRepoLisAluConDeuOrg, pcbRepoLisAluConDeuSuborg, pcbRepoLisAluConDeuCarrera, this.windowName + ".resetElements('carrInit')");
	},
	
	getInfo: function() {
		if (gridsRepoLisAluConDeuda.getDataCell(1) != "") {
			RepoInfoAlumno.show();
			editsRepoInfoCedula.setValue(gridsRepoLisAluConDeuda.getDataCell(1)); 
			setTimeout(function(){RepoInfoAlumno.buscar()}, 50);
			dialogsRepoInfoAlumno.close();
		}
	},
	
	setEvents: function() {
		pcbRepoLisAluConDeuOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoLisAluConDeuSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoLisAluConDeuCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoLisAluConDeuPeriodo.onChange(this.windowName + ".resetElements()");
		calendarsRepoLisAluConDeuDesde.onSelectedDay(this.windowName + ".resetElements()");
		calendarsRepoLisAluConDeuHasta.onSelectedDay(this.windowName + ".resetElements()");
		pcbRepoLisAluConDeuConcepto.onChange(this.windowName + ".resetElements()");
		editsRepoLisAluConDeuCi.onEnter(this.windowName + ".buscar()");
		editsRepoLisAluConDeuCi.onChange(this.windowName + ".limpiarFind(1)");
		editsRepoLisAluConDeuNombre.onEnter(this.windowName + ".buscar()");
		editsRepoLisAluConDeuNombre.onChange(this.windowName + ".limpiarFind(2)");
		editsRepoLisAluConDeuApellido.onEnter(this.windowName + ".buscar()");
		editsRepoLisAluConDeuApellido.onChange(this.windowName + ".limpiarFind(3)");
		gridsRepoLisAluConDeuda.onDblClickCells(this.windowName + ".getInfo()");
		imgButtonsRepoLisAluConDeuBloUsuario.onClick(this.windowName + ".coreUpdate('Lock')");
  		imgButtonsRepoLisAluConDeuRepre.onClick(this.windowName + ".reporteRepre()");
  		imgButtonsRepoLisAluConDeuReporte.onClick(this.windowName + ".reporte()");
  		imgButtonsRepoLisAluConDeuEnviarSms.onClick(this.windowName + ".coreUpdate('Sms')");
  		imgButtonsRepoLisAluConDeuEnviarEmail.onClick(this.windowName + ".coreUpdate('Email')");
  		imgButtonsRepoLisAluConDeuLimpiar.onClick(this.windowName + ".limpiar()");
  		imgButtonsRepoLisAluConDeuBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsRepoLisAluConDeuSalir.onClick('dialogsRepoLisAluConDeuda.close()');
    },

	getPrmConsulta: function(rlx, vPeri, vCarr, vPers, vFDes, vFHas, vConc) {
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.add('reg', vConc);
		rlx.add('reg', vConc);
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		rlx.add('reg', vFDes);
		rlx.add('reg', vFHas);
		rlx.add('reg', vFHas);
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.addInt('reg', vPeri.getText(), true);
		rlx.add('reg', vConc);
		rlx.add('reg', vConc);
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.add('reg', vCarr.setModeReturnGetText(2));
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		rlx.addInt('reg', vPers, true);
		return rlx;
	},
    
	buscar: function() {
		var rlx = xmlStructs.createRecordList("rlx");
		
		gridsRepoLisAluConDeuda.clean();
  		editsRepoLisAluConDeuTotal.setValue("");
		if (pcbRepoLisAluConDeuOrg.valid(dialogsRepoLisAluConDeuda))
			if (pcbRepoLisAluConDeuSuborg.valid(dialogsRepoLisAluConDeuda))
				if (pcbRepoLisAluConDeuPeriodo.valid(dialogsRepoLisAluConDeuda)) {
					if ((editsRepoLisAluConDeuCi.getValue() == '' && editsRepoLisAluConDeuNombre.getValue() == '' && editsRepoLisAluConDeuApellido.getValue() == '') || (editsRepoLisAluConDeuCi.getValue() != '' && editsRepoLisAluConDeuNombre.getValue() != '' && editsRepoLisAluConDeuApellido.getValue() != '')) {
						rlx = this.getPrmConsulta(rlx, pcbRepoLisAluConDeuPeriodo, pcbRepoLisAluConDeuCarrera, editsRepoLisAluConDeuCi.hideId, calendarsRepoLisAluConDeuDesde, calendarsRepoLisAluConDeuHasta, pcbRepoLisAluConDeuConcepto);
						Tool.cnnSrv('MsjObject', 'getListadoAlumnoDeudaReporte', this.windowName + '.loadDataBuscar()', rlx); 
						imgButtonsRepoLisAluConDeuBloUsuario.setEnable();
						imgButtonsRepoLisAluConDeuRepre.setEnable();
						imgButtonsRepoLisAluConDeuReporte.setEnable();
						imgButtonsRepoLisAluConDeuEnviarSms.setEnable();
						imgButtonsRepoLisAluConDeuEnviarEmail.setEnable();
					}
					else {
						ResuBusqueda.setObjectExtFnc(editsRepoLisAluConDeuCi, editsRepoLisAluConDeuNombre, editsRepoLisAluConDeuApellido, this.windowName + ".buscar()");
						Tool.getGridData('MantObject', 'getMantPersTodas', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoLisAluConDeuCi, editsRepoLisAluConDeuCi, editsRepoLisAluConDeuNombre, editsRepoLisAluConDeuNombre, editsRepoLisAluConDeuApellido, editsRepoLisAluConDeuApellido);
					}
				}
	},

	loadDataBuscar: function() {
		Tool.loadGridData(dialogsRepoLisAluConDeuda, gridsRepoLisAluConDeuda, false, json('getListadoAlumnoDeudaReporte'));
		Tool.loadEditData(dialogsRepoLisAluConDeuda, editsRepoLisAluConDeuTotal, 0, json('getListadoAlumnoDeudaTotal'));
	},
	
	reporteRepre : function() {
		var j = json('getListadoRepreDeuda').data;
		var yt=0;		
		function setRowTable(row, dataArr,height,alignArr){
		  var ps = rep.getPageSize();//tamanio de la pagina
		  if(ps - yt < 50){
		    rep.addPage();
		    yt = 127;	
		  }
		  var sizecols = [25,74,210,70,140,140,45,85];
		  rep.addAbsTable(1, yt, sizecols, 1, height, false);
		  var acu =0;
		  var pos = 0;
		  if(row > 0){
		    for(var i=0; i<4; i++){
		  	  var len = rep.measureText(dataArr[i]);
		  	  if(i>0)
		  	    acu += sizecols[i-1];
		  	  if(alignArr[i]=='center')
		  	    pos=acu+sizecols[i]/2-len/2-2;
		  	  if(alignArr[i]=='left')
		  	    pos=acu+2;		  	  
		  	  rep.addText(1+pos, yt + (height/2), dataArr[i] ,false);
		    };
		    if(dataArr[5].n.length==1){
		  	  rep.addText(1+pos+sizecols[3], yt + (height/2), dataArr[5].n[0] ,false);
		  	  rep.addText(1+pos+sizecols[3]+sizecols[4], yt + (height/2), dataArr[5].a[0] ,false);
		  	  rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5], yt + (height/2), dataArr[5].p[0] ,false);
		  	  rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5]+sizecols[6], yt + (height/2), dataArr[5].s[0] ,false);
		  	}
		  	else{
		  	  for(var tx=0; tx<dataArr[5].n.length; tx++){	
		  	    rep.addText(1+pos+sizecols[3], yt + 10*tx + 20 , dataArr[5].n[tx] ,false);
		  	    rep.addText(1+pos+sizecols[3]+sizecols[4], yt + 10*tx + 20, dataArr[5].a[tx] ,false);
		  	    rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5], yt + 10*tx + 20, dataArr[5].p[tx] ,false);
		  	    rep.addText(1+pos+sizecols[3]+sizecols[4]+sizecols[5]+sizecols[6], yt + 10*tx + 20, dataArr[5].s[tx] ,false);
		  	  }	
		  	}
		  }
		  else{
		  	for(var i=0; i<8; i++){
		  	  var len = rep.measureText(dataArr[i]);
		  	  if(i>0)
		  	    acu += sizecols[i-1];
		  	  if(alignArr[i]=='center')
		  	    pos=acu+sizecols[i]/2-len/2-4;
		  	  if(alignArr[i]=='left')
		  	    pos=acu+2;		  	  
		  	  rep.addText(1+pos, yt + (height/2), dataArr[i] ,false);
		  	}
		  }		  
		};
		
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
    	rep.setPositionIcon(750,44);
    	rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        //rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 30,'ORGANIZACIÓN: '+pcbRepoLisAluConDeuOrg.getOption(),false);
		rep.addText(250, 30,'SUBORG.: '+pcbRepoLisAluConDeuSuborg.getOption(),false);
		rep.addText(500, 30,'CARRERA:         '+pcbRepoLisAluConDeuCarrera.getOption(),false);
		rep.addText(20, 64, 'PERIODO:       '+pcbRepoLisAluConDeuPeriodo.getOption(),false);
		rep.addText(250, 64, 'FECHA DESDE:          '+calendarsRepoLisAluConDeuDesde.getFechaFromEdit(),false);
		rep.addText(500, 64, 'FECHA HASTA:  '+calendarsRepoLisAluConDeuHasta.getFechaFromEdit(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(210, 108, 'LISTADO DE REPRESENTANTES CON DEUDA',false);
		//************************ TABLE ***************************
		rep.addText(20, 125, '',false);
		yt = rep.getNewY();
		var align = ['center','center','center','center','center','center','center','center'];
		var tit = ['No.', 'C.I.', 'Representante', 'Deuda', 'Estudiante', 'Nombre ', 'Grado', 'Teléfono'];
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'courier','bold');
		setRowTable(0,tit,20,align);
		var ci = '';
		
		var container =[];
		for(var row=0; row<j[0].length; row++){			  
		  if(j[0][row]!=ci){
		  	var aux = new Array();
		    aux[0]=container.length+1;//nro.
		    aux[1]=j[0][row];	//cedula
		    aux[2]=j[1][row].substring(0, 30);	//ape rep
		    aux[3]=j[2][row];	//nom rep 
		    aux[4]=20;			//height
		    aux[5]=new Object();
		    aux[5].n=new Array();
		    aux[5].a=new Array();
		    aux[5].p=new Array();
		    aux[5].s=new Array();
		    aux[5].n[0]=j[3][row];
		    aux[5].a[0]=j[4][row];
		    aux[5].p[0]=j[5][row];
		    aux[5].s[0]=j[6][row];
			container[container.length]=aux;
		  }
		  else{
		  	aux[5].n[aux[5].n.length]=j[3][row].substring(0, 22);//nombre alu
		  	aux[5].a[aux[5].a.length]=j[4][row].substring(0, 22);//ape alu
		  	aux[5].p[aux[5].p.length]=j[5][row];//pos alu
		  	aux[5].s[aux[5].s.length]=j[6][row];//secc alu
		    aux[4]+=20;
		  }
		  ci=j[0][row];
		}
		align = ['left','left','left','left','left','left','left','left'];
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),8,'helvetica','normal');
		yt+=20;
		for(cx=0; cx<container.length; cx++){
		  setRowTable(cx+1,container[cx],container[cx][4],align);
		  yt+=container[cx][4];			
		  //console.log(container[cx]);
		} 	
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		rep.previewHTML();
	},

	reporte: function(){
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1090,10);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),14,'courier','bold');
		rep.addBar(0,2,1128,42,rep.getRGBAObj(210,200,200,0.9),false);
      	rep.addText(408, 28,'LISTADO DE ESTUDIANTES CON DEUDA',false);
      	rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
      	rep.addBar(0,45,1128,94,rep.getRGBAObj(187,196,238,0.8),false);
      	rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		rep.addText(20, 66,'ORGANIZACIÓN: '+pcbRepoLisAluConDeuOrg.getOption(),false);
		rep.addText(250, 66,'SUBORG.: '+pcbRepoLisAluConDeuSuborg.getOption(),false);
		rep.addText(600, 66,'CARRERA:         '+pcbRepoLisAluConDeuCarrera.getOption(),false);
		rep.addText(20, 82, 'PERIODO:            '+pcbRepoLisAluConDeuPeriodo.getOption(),false);
		rep.addText(250, 82, 'FECHA DESDE:          '+calendarsRepoLisAluConDeuDesde.getFechaFromEdit(),false);
		rep.addText(600, 82, 'FECHA HASTA:  '+calendarsRepoLisAluConDeuHasta.getFechaFromEdit(),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),13,'helvetica','normal');
		rep.addText(920, 82,'Total Deuda: '+editsRepoLisAluConDeuTotal.getText(),false);
		rep.setFontProperties(rep.getRGBAObj(50,50,50,0.9),9,'helvetica','normal');
		//************************ TABLE ***************************
      	rep.setTableRowProperties(20, 180, 180, 180, 'bold helvetica',0, 0, 0, 8, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
      	rep.setTableCellProperties(1, 'bold helvetica', 8);
      	rep.addTable('tablaRepoLisAluConDeuda',['Cedula','Apellido','Nombre','ETAPA','POS','SEC','Concepto','Mes','Fecha Venc.','Abono','Monto','Deuda'],558,104);
      	rep.setTotalRowTable(24);
		rep.setHeightRow(25);
		rep.setSizeColumnArray([90,210,210,60,30,30,110,80,70,80,80,80]);
		rep.setAlignData(['center','left','left','left','left','center','left','left','center','right','right','right']);
		rep.addJsonData('tablaRepoLisAluConDeuda', 'getListadoAlumnoDeudaReporte',[0,1,2,9,10,11,3,4,5,6,7,8]);
		////////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
      	rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
      	rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
      	rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.previewHTML()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	coreUpdate: function(methodName) {
		var rlx = xmlStructs.createRecordList("rlx");
		
		if (pcbRepoLisAluConDeuOrg.valid(dialogsRepoLisAluConDeuda))
			if (pcbRepoLisAluConDeuSuborg.valid(dialogsRepoLisAluConDeuda))
				if (pcbRepoLisAluConDeuPeriodo.valid(dialogsRepoLisAluConDeuda)) {
					rlx = this.getPrmConsulta(rlx, pcbRepoLisAluConDeuPeriodo, pcbRepoLisAluConDeuCarrera, editsRepoLisAluConDeuCi.hideId, calendarsRepoLisAluConDeuDesde, calendarsRepoLisAluConDeuHasta, pcbRepoLisAluConDeuConcepto);
					Tool.cnnSrv('MsjObject', 'enviarListadoAlumnoDeuda' + methodName, 'dlgWait.hide();', rlx); 
				}
	}
};