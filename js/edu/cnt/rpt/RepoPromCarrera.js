var dialogsRepoPromCarrera = {};
var pcbRepoPromCarreraOrg = {};
var pcbRepoPromCarreraSuborg = {};
var pcbRepoPromCarreraCarr = {};
var pcbRepoPromCarreraPeriodo = {};
var pcbRepoPromCarreraPosicion = {};
var pcbRepoPromCarreraPosProm = {};
var pcbRepoPromCarreraEdo = {};
var imgBtnRepoPromCarreraImprimir = {};
var imgButtonsRepoCuadHonSalir = {};
var mwRepoPromCarrera = {};// minWindow

var RepoPromCarrera = {
    windowName: 'RepoPromCarrera',
    isCreate: false,
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoPromCarrera.isByClean()) 
            this.limpiar('lmp');
        dialogsRepoPromCarrera.show();
    },
    
    hide: function(){
        dialogsRepoPromCarrera.hide();
    },
    
    createMWs: function(){
        mwRepoPromCarrera = desktop.addMinWindow('P.P.E.', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoPromCarrera.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoPromCarrera_Init: function(){
        dialogsRepoPromCarrera.setMinimizeXY(0, 0);
        dialogsRepoPromCarrera.setCenterScreen();    
		dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraOrg, 20, 40);
		dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraSuborg, 20, 75);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraCarr, 20, 110);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraPeriodo, 20, 145);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraPosicion, 20, 180);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraPosProm, 20, 215);
        dialogsRepoPromCarrera.addObject(pcbRepoPromCarreraEdo, 20, 250);
        dialogsRepoPromCarrera.addObject(imgBtnRepoPromCarreraImprimir, 90, 290);
        dialogsRepoPromCarrera.addObject(imgButtonsRepoCuadHonSalir, 205, 290);
    },
	
    create: function() {
        dialogsRepoPromCarrera = dialogs.create('dialogsRepoPromCarrera',0,0,385,305,'PROMEDIO POR PERIODO ESCOLAR');
        dialogsRepoPromCarrera.setAdjY(60);
        pcbRepoPromCarreraOrg = powerComboBox.create('pcbRepoPromCarreraOrg', 'pcbRepoPromCarreraOrg', 'Organización (+):', 1,105);
        pcbRepoPromCarreraOrg.enableReadOnlyEditor();
        pcbRepoPromCarreraOrg.addEmptyOption();
        pcbRepoPromCarreraOrg.setValidEmpty();
        pcbRepoPromCarreraOrg.setWidthCombo(230);
        pcbRepoPromCarreraSuborg = powerComboBox.create('pcbRepoPromCarreraSuborg', 'pcbRepoPromCarreraSuborg', 'Suborganización (^):', 1,105);
        pcbRepoPromCarreraSuborg.enableReadOnlyEditor();
        pcbRepoPromCarreraSuborg.addEmptyOption();
        pcbRepoPromCarreraSuborg.setValidEmpty();
        pcbRepoPromCarreraSuborg.setWidthCombo(230);
        pcbRepoPromCarreraCarr = powerComboBox.create('pcbRepoPromCarreraCarr', 'pcbRepoPromCarreraCarr', 'Carrera (^):', 1,105);
        pcbRepoPromCarreraCarr.enableReadOnlyEditor();
        pcbRepoPromCarreraCarr.addEmptyOption();
        pcbRepoPromCarreraCarr.setValidEmpty();
        pcbRepoPromCarreraCarr.setWidthCombo(230);
        pcbRepoPromCarreraPeriodo = powerComboBox.create('pcbRepoPromCarreraPeriodo', 'pcbRepoPromCarreraPeriodo', 'Periodo (^):', 1,105);
        pcbRepoPromCarreraPeriodo.enableReadOnlyEditor();
        pcbRepoPromCarreraPeriodo.addEmptyOption();
        pcbRepoPromCarreraPeriodo.setValidEmpty();
        pcbRepoPromCarreraPeriodo.setWidthCombo(230);
        pcbRepoPromCarreraPosicion = powerComboBox.create('pcbRepoPromCarreraPosicion','pcbRepoPromCarreraPosicion','Año / Grado :',1,105);
    	pcbRepoPromCarreraPosicion.enableReadOnlyEditor();
    	pcbRepoPromCarreraPosicion.addEmptyOption();
    	pcbRepoPromCarreraPosicion.setValidEmpty();
    	pcbRepoPromCarreraPosicion.setWidthCombo(230);
        pcbRepoPromCarreraPosProm = powerComboBox.create('pcbRepoPromCarreraPosProm','pcbRepoPromCarreraPosProm','Promedio x Año:',1,105);
        pcbRepoPromCarreraPosProm.setTypeObjOpt('input', 'checkbox');
        pcbRepoPromCarreraPosProm.setFirstRowCheckMode(2);
        pcbRepoPromCarreraPosProm.setDataType('string');
        pcbRepoPromCarreraPosProm.enableReadOnlyEditor();
        pcbRepoPromCarreraPosProm.addEmptyOption();
    	pcbRepoPromCarreraPosProm.setValidEmpty();
    	pcbRepoPromCarreraPosProm.setFieldFind(true);
    	pcbRepoPromCarreraPosProm.setWidthCombo(230);
		pcbRepoPromCarreraEdo = powerComboBox.create('pcbRepoPromCarreraEdo', 'pcbRepoPromCarreraEdo', 'Estado (*):', 1,105);
        pcbRepoPromCarreraEdo.enableReadOnlyEditor();
        pcbRepoPromCarreraEdo.addEmptyOption();
        pcbRepoPromCarreraEdo.setValidEmpty();
        pcbRepoPromCarreraEdo.setFieldFind(true);
    	pcbRepoPromCarreraEdo.setWidthCombo(230);
        imgBtnRepoPromCarreraImprimir = imgButtons.create('imgBtnRepoPromCarreraImprimir', 'Imprimir', 'ok.png');
        imgButtonsRepoCuadHonSalir = imgButtons.create('imgButtonsRepoCuadHonSalir', 'Salir', 'salir.png');
        imgBtnRepoPromCarreraImprimir.setDimension(90, 22);
        imgButtonsRepoCuadHonSalir.setDimension(90, 22);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsRepoPromCarrera_Init();
        this.createMWs();
    },
    
    limpiar : function(tipo) {
  		pcbRepoPromCarreraOrg.setSelectedIndex(0);
  		pcbRepoPromCarreraSuborg.clear();
  		pcbRepoPromCarreraCarr.clear();
  		pcbRepoPromCarreraPeriodo.clear();
  		pcbRepoPromCarreraPosicion.clear();
  		pcbRepoPromCarreraPosProm.clear();
  		dialogsRepoPromCarrera.setMsg("");
  		if (tipo == "lmp")
  		    Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
  		else
  	  		dlgWait.hide();
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraOrg, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoPromCarrera, pcbRepoPromCarreraOrg, pcbRepoPromCarreraSuborg, pcbRepoPromCarreraCarr, this.windowName + ".resetElements('carr')");
	},
    
    setEvents: function(){
		pcbRepoPromCarreraOrg.onChange(this.windowName + ".resetElements('org')");
		pcbRepoPromCarreraSuborg.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoPromCarreraCarr.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoPromCarreraPeriodo.onChange(this.windowName + ".resetElements('per')");	
    	imgBtnRepoPromCarreraImprimir.onClick(this.windowName + ".coreUpdate()");
        imgButtonsRepoCuadHonSalir.onClick('dialogsRepoPromCarrera.close()');
    },
    
    resetElements : function(element) {
        var rlx = xmlStructs.createRecordList("rlx");

        if (element == 'org') {
			pcbRepoPromCarreraSuborg.clear();
	  		pcbRepoPromCarreraCarr.clear();
	  		pcbRepoPromCarreraPeriodo.clear();
			pcbRepoPromCarreraPosicion.clear();
	  		pcbRepoPromCarreraPosProm.clear();
	    	if (powerComboBoxRepoAluPorSecOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoPromCarrera, pcbRepoPromCarreraSuborg, 1, 2, powerComboBoxRepoAluPorSecOrganizacion);
		}
		else if (element == 'suborg') {
	  		pcbRepoPromCarreraCarr.clear();
	  		pcbRepoPromCarreraPeriodo.clear();
			pcbRepoPromCarreraPosicion.clear();
	  		pcbRepoPromCarreraPosProm.clear();
	    	if (pcbRepoPromCarreraSuborg.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoPromCarrera, pcbRepoPromCarreraCarr, -1, 3, pcbRepoPromCarreraSuborg);
		}
		else if (element == 'carr') {
	  		pcbRepoPromCarreraPeriodo.clear();
			pcbRepoPromCarreraPosicion.clear();
	  		pcbRepoPromCarreraPosProm.clear();
	    	if (pcbRepoPromCarreraCarr.getOption() != "")
	    		Tool.getPowerComboDataFnc('pcbRepoPromCarreraPeriodo.setSelectedIndex(1);' + this.windowName + '.resetElements("per")', 'MantObject', 'getPeriodoXNivelAcad', dialogsRepoPromCarrera, pcbRepoPromCarreraPeriodo, 0, 1, pcbRepoPromCarreraCarr.setModeReturnGetText(5));
		}
	    else if (element == 'per') {
    		rlx.add('reg', pcbRepoPromCarreraCarr.setModeReturnGetText(2));
    		rlx.add('reg', pcbRepoPromCarreraPeriodo);
			Tool.cnnSrv("ReportObject", "getRepoPromAlumPosLap", this.windowName + ".loadDataPos()", rlx);
    	} 
	},
	
	loadDataPos: function() {
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraPosicion, 0, 1, json('getMantPensumPosicion'));
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraPosProm, 0, 1, json('getMantPensumPosicion'));
		Tool.loadPowerComboData(dialogsRepoPromCarrera, pcbRepoPromCarreraEdo, 0, 1, json('getMantEstPersona'));
		pcbRepoPromCarreraEdo.setSelectedIndex(1);
	},

	reporte : function() {
		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,108);
        rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','bold');
		rep.addBar(0,104,1128,142,rep.getRGBAObj(210,200,200,0.9),true);
		rep.addText(250, 130, 'PROMEDIO POR PERIODO ESCOLAR',false);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),8,'helvetica','bold');
        rep.addText(20, 173, 'ORGANIZACIÓN:          '+pcbRepoPromCarreraOrg.getOption(),true);
		rep.addText(300, 173, 'SUBORGANIZACIÓN:   '+pcbRepoPromCarreraSuborg.getOption(),true);
		rep.addText(20, 197, 'CARRERA:                    '+pcbRepoPromCarreraCarr.getOption(),true);
		rep.addText(300, 197, 'AÑO / GRADO: '+pcbRepoPromCarreraPosicion.getOption(),true);
		rep.addText(580, 197, 'PERIODO: '+pcbRepoPromCarreraPeriodo.getOption(),true);
		//////////////////////////////////////////TABLA DE DATOS///////////////////////////////////////////////////////////////////////////////////////////
        //************************ TABLE ***************************
  		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 9);	
		rep.addTable('tablaPromCarrera',['Nº','C.i.','Apellido','Nombre','1er','2do','3er','4to','5to','6to','Promedio'],392,212);
		rep.setTotalRowTable(40);
		rep.setHeightRow(18);
		rep.setSizeColumnArray([34,80,188,188,38,38,38,38,38,38,78]);
		rep.setAlignData(['right','right','left','left','center','center','center','center','center','center','center']);
		rep.addJsonData('tablaPromCarrera','getRepoPromAlumUniversidad',[0,1,2,3,4,5,6,7,8,9,10]); 
        //////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
        //********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();    	
	},

    coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");
        
		if (pcbRepoPromCarreraPeriodo.valid(dialogsRepoPromCarrera))  
        	if (pcbRepoPromCarreraCarr.valid(dialogsRepoPromCarrera)) {
			    rlx.add('reg', pcbRepoPromCarreraPosProm);
			    rlx.add('reg', pcbRepoPromCarreraPeriodo);
			    rlx.add('reg', pcbRepoPromCarreraCarr);
			    rlx.add('reg', pcbRepoPromCarreraPosicion);
			    rlx.add('reg', pcbRepoPromCarreraEdo);
			    Tool.cnnSrv('ReportObject', 'getRepoPromAlumUniversidad', this.windowName + ".reporte()", rlx);
        	}
    }
}; 

