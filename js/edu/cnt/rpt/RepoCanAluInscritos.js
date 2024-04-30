var dialogsRepoCanAluInscritos = {};
var pcbRepoCanAluInsOrganizacion = {};
var pcbRepoCanAluInsSuborganizacion = {};
var pcbRepoCanAluInsPosicion = {};
var pcbRepoCanAluInsCarrera = {};
var pcbRepoCanAluInsPeriodo = {};
var pcbRepoCanAluInsEdo = {};
var calendarRepoCanAluInsDesde = {};
var calendarRepoCanAluInsHasta = {};
var imgButtonsRepoCanAluInscritos = {};
var imgButtonsRepoCanAluNoInscritos = {};
var imgButtonsRepoCanAluInsVer = {};
var imgButtonsRepoCanAluInsSalir = {};
var mwRepoCanAluInscritos = {};//minWindow

var RepoCanAluInscritos = {
    windowName: 'RepoCanAluInscritos',
    isCreate: false, 
    
    show : function() {  
		if (!this.isCreate) {
			this.init();
			this.isCreate = true;
		}
			this.limpiar();			
		dialogsRepoCanAluInscritos.show();
	},
	
	hide : function() {
		dialogsRepoCanAluInscritos.hide();
	},
	
    createMWs: function() {
        mwRepoCanAluInscritos = desktop.addMinWindow('Inscritos', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoCanAluInscritos.setMinWindowEvent('mw' + this.windowName + '.hide()', 'mw' + this.windowName + '.disable()', 'mw' + this.windowName + '.show()');
    },

    dialogsRepoCanAluInscritos_Init : function(){
        dialogsRepoCanAluInscritos.setMinimizeXY(0,0);
        dialogsRepoCanAluInscritos.setCenterScreen();
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsOrganizacion,10,30);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsSuborganizacion,10,60);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsCarrera,10,90);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsPosicion,10,120);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsPeriodo,10,150);    
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluInscritos,80,190);
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluNoInscritos,210,190);
        dialogsRepoCanAluInscritos.addObject(pcbRepoCanAluInsEdo,10,220);    
        dialogsRepoCanAluInscritos.addObject(calendarRepoCanAluInsDesde.getEditCalendar(), 10, 250);
    	dialogsRepoCanAluInscritos.addObject(calendarRepoCanAluInsHasta.getEditCalendar(), 10, 280);
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluInsVer,80,320);
        dialogsRepoCanAluInscritos.addObject(imgButtonsRepoCanAluInsSalir,210,320);
    },
 
    create : function() {
    	dialogsRepoCanAluInscritos = dialogs.create('dialogsRepoCanAluInscritos',0,0,400,325,'ESTUDIANTES INSCRITOS');
    	dialogsRepoCanAluInscritos.setAdjY(50);
    	pcbRepoCanAluInsOrganizacion = powerComboBox.create('pcbRepoCanAluInsOrganizacion','pcbRepoCanAluInsOrganizacion','Organización :',1,115);
    	pcbRepoCanAluInsOrganizacion.enableReadOnlyEditor();
    	pcbRepoCanAluInsOrganizacion.addEmptyOption();
    	pcbRepoCanAluInsOrganizacion.setValidEmpty();
    	pcbRepoCanAluInsOrganizacion.setWidthCombo(250);
    	
    	pcbRepoCanAluInsSuborganizacion = powerComboBox.create('pcbRepoCanAluInsSuborganizacion','pcbRepoCanAluInsSuborganizacion','Suborganización :',1,115);
    	pcbRepoCanAluInsSuborganizacion.enableReadOnlyEditor();
    	pcbRepoCanAluInsSuborganizacion.addEmptyOption();
    	pcbRepoCanAluInsSuborganizacion.setValidEmpty();
    	pcbRepoCanAluInsSuborganizacion.setWidthCombo(250);
    	
    	pcbRepoCanAluInsCarrera = powerComboBox.create('pcbRepoCanAluInsCarrera','pcbRepoCanAluInsCarrera','Carrera (*):',1,115);
    	pcbRepoCanAluInsCarrera.enableReadOnlyEditor();
    	pcbRepoCanAluInsCarrera.addEmptyOption();
    	pcbRepoCanAluInsCarrera.setValidEmpty();
    	pcbRepoCanAluInsCarrera.setFieldFind(true);
    	pcbRepoCanAluInsCarrera.setWidthCombo(250);
    	
    	pcbRepoCanAluInsPosicion = powerComboBox.create('pcbRepoCanAluInsPosicion','pcbRepoCanAluInsPosicion','Posicion (*):',1,115);
    	pcbRepoCanAluInsPosicion.enableReadOnlyEditor();
    	pcbRepoCanAluInsPosicion.addEmptyOption();
    	pcbRepoCanAluInsPosicion.setValidEmpty();
    	pcbRepoCanAluInsPosicion.setFieldFind(true);
    	pcbRepoCanAluInsPosicion.setWidthCombo(100);

    	pcbRepoCanAluInsPeriodo = powerComboBox.create('pcbRepoCanAluInsPeriodo','pcbRepoCanAluInsPeriodo','Periodo (+):',1,115);
    	pcbRepoCanAluInsPeriodo.enableReadOnlyEditor();
    	pcbRepoCanAluInsPeriodo.addEmptyOption();
    	pcbRepoCanAluInsPeriodo.setValidEmpty();
    	pcbRepoCanAluInsPeriodo.setWidthCombo(100);
    	
    	pcbRepoCanAluInsEdo = powerComboBox.create('pcbRepoCanAluInsEdo', 'pcbRepoCanAluInsEdo', 'Estado (*):', 1,131);
		pcbRepoCanAluInsEdo.enableReadOnlyEditor();
		pcbRepoCanAluInsEdo.addEmptyOption();
		pcbRepoCanAluInsEdo.setValidEmpty();
		pcbRepoCanAluInsEdo.setTypeObjOpt('input', 'checkbox');
		pcbRepoCanAluInsEdo.setFirstRowCheckMode(2);
		pcbRepoCanAluInsEdo.setWidthCombo(136);
		pcbRepoCanAluInsEdo.setFieldFind(true);

		calendarRepoCanAluInsDesde = calendars.create('calendarRepoCanAluInsDesde');      
    	calendarRepoCanAluInsDesde.setCaption('Fecha Inscrito Desde (*):',1,135);
      	calendarRepoCanAluInsDesde.setValidEmpty();
		calendarRepoCanAluInsDesde.setWidthEditCalendar(120);
    	calendarRepoCanAluInsDesde.sendToFrom(100);
    	calendarRepoCanAluInsDesde.setFieldFind(true);
    	
      	calendarRepoCanAluInsHasta = calendars.create('calendarRepoCanAluInsHasta');      
    	calendarRepoCanAluInsHasta.setCaption('Fecha Inscrito Hasta (*):',1,135);
      	calendarRepoCanAluInsHasta.setValidEmpty();
		calendarRepoCanAluInsHasta.setWidthEditCalendar(120);
    	calendarRepoCanAluInsHasta.sendToFrom(100);
		calendarRepoCanAluInsHasta.setFieldFind(true);

    	imgButtonsRepoCanAluInscritos = imgButtons.create('imgButtonsRepoCanAluInscritos','Inscritos','print.png');
    	imgButtonsRepoCanAluNoInscritos = imgButtons.create('imgButtonsRepoCanAluNoInscritos','No Inscritos','print.png');
    	imgButtonsRepoCanAluInsVer = imgButtons.create('imgButtonsRepoCanAluInsVer','Ver Listado','print.png');
    	imgButtonsRepoCanAluInsSalir = imgButtons.create('imgButtonsRepoCanAluInsSalir','Salir','salir.png');
        imgButtonsRepoCanAluInscritos.setDimension(110,22);
        imgButtonsRepoCanAluNoInscritos.setDimension(110,22);
    	imgButtonsRepoCanAluInsVer.setDimension(110,22);
    	imgButtonsRepoCanAluInsSalir.setDimension(110,22);
  	},

  	init : function() {
  		this.create();
  		this.setEvents();
  		this.dialogsRepoCanAluInscritos_Init();
  		this.createMWs();
  	},
    
  	limpiar : function() {
  		pcbRepoCanAluInsOrganizacion.setSelectedIndex(0);
  		pcbRepoCanAluInsSuborganizacion.clear();
  		pcbRepoCanAluInsCarrera.clear();
  		pcbRepoCanAluInsPeriodo.clear();
    	calendarRepoCanAluInsDesde.clear();
		calendarRepoCanAluInsHasta.clear();
  		dialogsRepoCanAluInscritos.setMsg("");
		Tool.cnnSrv("MantObject", "getMantOrganizacion", this.windowName + ".loadDataInit()");
	},

	loadDataInit: function() {
		Tool.loadPowerComboData(dialogsRepoCanAluInscritos, pcbRepoCanAluInsOrganizacion, 0, 1, json('getData'));
		Tool.getContext(dialogsRepoCanAluInscritos, pcbRepoCanAluInsOrganizacion, pcbRepoCanAluInsSuborganizacion, pcbRepoCanAluInsCarrera, this.windowName + ".resetElements('carr');pcbRepoCanAluInsCarrera.setSelectedIndex(0);");
	},
    
	setEvents: function() {
		pcbRepoCanAluInsOrganizacion.onChange(this.windowName + ".resetElements('org')");
		pcbRepoCanAluInsSuborganizacion.onChange(this.windowName + ".resetElements('suborg')");
		pcbRepoCanAluInsCarrera.onChange(this.windowName + ".resetElements('carr')");
		pcbRepoCanAluInsPeriodo.onChange(this.windowName + ".resetElements('per')");
		pcbRepoCanAluInsPosicion.onChange(this.windowName + ".resetElements('pos')");
    	imgButtonsRepoCanAluInsVer.onClick(this.windowName + ".coreUpdate(0)");
    	imgButtonsRepoCanAluInscritos.onClick(this.windowName + ".coreUpdate(1)");
    	imgButtonsRepoCanAluNoInscritos.onClick(this.windowName + ".coreUpdate(2)");
        imgButtonsRepoCanAluInsSalir.onClick('dialogsRepoCanAluInscritos.close()');
    },
    
    resetElements : function(element) {
		if (element == 'org') {
	  		pcbRepoCanAluInsSuborganizacion.clear();
	  		pcbRepoCanAluInsCarrera.clear();
	  		pcbRepoCanAluInsPeriodo.clear();
	    	if (pcbRepoCanAluInsOrganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantSuborganizacion', dialogsRepoCanAluInscritos, pcbRepoCanAluInsSuborganizacion, 1, 2, pcbRepoCanAluInsOrganizacion);
		}
		else if (element == 'suborg') {
	  		pcbRepoCanAluInsCarrera.clear();
	  		pcbRepoCanAluInsPeriodo.clear();
	    	if (pcbRepoCanAluInsSuborganizacion.getOption() != "")
	    		Tool.getPowerComboData('MantObject', 'getMantenimientodeCarrera', dialogsRepoCanAluInscritos, pcbRepoCanAluInsCarrera, -1, 3, pcbRepoCanAluInsSuborganizacion);
		}
		else if (element == 'carr') {
	    	if (pcbRepoCanAluInsCarrera.getOption() != "")
	    		Tool.getPowerComboDataFnc(this.windowName + '.resetElements("per")','MantObject', 'getPeriodoXNivelAcad', dialogsRepoCanAluInscritos, pcbRepoCanAluInsPeriodo, 0, 1, pcbRepoCanAluInsCarrera.setModeReturnGetText(5));
		}
		else if (element == 'per') {
			if (pcbRepoCanAluInsCarrera.getOption() != '') {
				Tool.getPowerComboData('MantObject', 'getMantPensumPosicion', dialogsRepoCanAluInscritos, pcbRepoCanAluInsPosicion, 0, 1, pcbRepoCanAluInsCarrera.setModeReturnGetText(2));
			}
			else {
				if (pcbRepoCanAluInsPeriodo.getOption() == '') {
					pcbRepoCanAluInsPeriodo.setSelectedIndex(1);
				}
				Tool.loadPowerComboData(dialogsRepoCanAluInscritos, pcbRepoCanAluInsEdo, 0, 1, json('getMantEstPersona'));
			}
    	}
	},
	
	reporteNoInscritos : function() {
	  		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1060,42);
		
		////////rep = new Report('portrait');
    	////////rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+pcbRepoCanAluInsOrganizacion.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+pcbRepoCanAluInsSuborganizacion.getOption(),false);
		rep.addText(20, 63, 'CARRERA:         '+pcbRepoCanAluInsCarrera.getOption(),false);
		rep.addText(500, 23, 'TOTAL INSCRITOS(SIGUIENTE GRADO/AÑO) PERIODO ' + pcbRepoCanAluInsPeriodo.getOption() + ': ' + json('getTotalAlumnoNoInscrito').data[0][0],false);
		rep.addText(500, 43, 'TOTAL INSCRITOS(ESTUDIANTE ACTIVO/RETIRADO/INACTIVO) PERIODO ANTERIOR: '+json('getTotalAlumnoNoInscrito').data[1][0],false);
		rep.addText(500, 63, 'TOTAL NO INSCRITOS PERIODO ANTERIOR: '+json('getListAlumnoNoInscrito').data[0].length,false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(310, 106, 'ESTUDIANTES NO INSCRITOS DEL PERIODO ANTERIOR',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoEstNoIns',['Nº','C.i.','Estudiante','Mención','Posición','Sección','Representante','Telefono','Condición'],565,120);
		rep.setTotalRowTable(32);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([20,80,260,130,100,70,260,120,90]);
        rep.setAlignData(['center','center','left','center','center','center','left','center','center']); 
        rep.addJsonData('TablaRepoEstNoIns','getListAlumnoNoInscrito',[0,1,2,3,4,5,6,7,8]);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	reporte : function() {
	    ///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('portrait');
        rep.setPositionIcon(756,40);
        rep.setNoRepeatHead();
        //rep.setHeadImage(imgEduca.banner,true);
		///////////////////////////////////////TITULO DEL REPORTE//////////////////////////////////////////////////////////////////////////////////////////
		//rep.setFontProperties(rep.getRGBAObj(0,0,0,0.8),13,'courier','bold');
		//rep.addBar(0,104,1128,144,rep.getRGBAObj(210,200,200,0.9),false);
        //rep.addHeadTitle('ALUMNOS POR SECCIÓN',true);
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'helvetica','normal');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(187,196,238,0.8),false);
		rep.addText(20, 20, 'ORGANIZACION:        '+pcbRepoCanAluInsOrganizacion.getOption(),false);
		rep.addText(20, 38, 'SUBORGANIZACION: '+pcbRepoCanAluInsSuborganizacion.getOption(),false);
		rep.addText(20, 56, 'PERIODO:   '+pcbRepoCanAluInsPeriodo.getOption(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(210,200,200,0.9),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,0.9),14,'helvetica','normal');
		rep.addText(278, 108, 'ESTUDIANTES INSCRITOS',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 12, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 11);
		rep.addTable('TablaRepoCanAluInscritos',['Carrera','Posición','Sección','Cantidad'],400,120);
		rep.setTotalRowTable(43);
		rep.setHeightRow(20);
        rep.setSizeColumnArray([400,200,100,98]);
        rep.setAlignData(['left','left','left','center']); 
        rep.addJsonData('TablaRepoCanAluInscritos','getCantAlumnoInscrito',[0,1,2,3]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},
	
	reporteListado : function() {
	  		///////////////////////////////////////CABECERA DE REPORTE/////////////////////////////////////////////////////////////////////////////////////////	    
		rep = new Report('landscape');
    	rep.setPositionIcon(1060,42);
		
		////////rep = new Report('portrait');
    	////////rep.setPositionIcon(750,44);
    	//rep.setHeadImage(imgEduca.banner,false);
    	rep.setNoRepeatHead();
		///////////////////////////////////////TITULO INFORMATIVO DEL REPORTE//////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(0,0,0,1),9,'courier','bold');
        rep.addBar(0,0,1128,78,rep.getRGBAObj(180,180,180,0.4),false);
		rep.addText(20, 23, 'ORGANIZACION:    '+pcbRepoCanAluInsOrganizacion.getOption(),false);
		rep.addText(20, 43, 'SUBORGANIZACION: '+pcbRepoCanAluInsSuborganizacion.getOption(),false);
		rep.addText(20, 63, 'CARRERA:         '+pcbRepoCanAluInsCarrera.getOption(),false);
		rep.addText(500, 43, 'FECHA DESDE: '+calendarRepoCanAluInsDesde.getFechaFromEdit(),false);
		rep.addText(500, 63, 'FECHA HASTA: '+calendarRepoCanAluInsHasta.getFechaFromEdit(),false);
		rep.addBar(0,83,1128,116,rep.getRGBAObj(180,180,180,0.4),false);
		rep.setFontProperties(rep.getRGBAObj(0,0,0,1),14,'courier','bold');
		rep.addText(450, 106, 'LISTADO DE ESTUDIANTES',false);
		//************************ TABLE ***************************
		rep.setTableRowProperties(20, 180, 180, 180, 'helvetica',0, 0, 0, 10, 'rgba(180,180,180,0.4)', 'rgba(180,180,180,0.4)', 2);
		rep.setTableCellProperties(1, 'helvetica', 8);
		rep.addTable('TablaRepoEstNoIns',['C.i.','Apellido','Nombre','Carrera','Posición','Sección','Estado','Fecha Inscrito'],565,120);
		rep.setTotalRowTable(22);
		rep.setHeightRow(18);
        rep.setSizeColumnArray([140,230,230,170,70,60,90,140]);
        rep.setAlignData(['right','left','left','left','center','center','center','left']); 
        rep.addJsonData('TablaRepoEstNoIns','getListEstudiante',[0,1,2,3,4,5,6,7]);
		//////////////////////////////////////////PIE DE PAGINA//////////////////////////////////////////////////////////////////////////////////////////
        rep.setFontProperties(rep.getRGBAObj(255,255,255,1),9,'courier','normal');
        rep.addFooterBar(rep.getRGBAObj(0,0,40,0.9),true);
		//********************************************* FIN GENERACION DEL REPORTE ***********************************************
		rep.render();
		Reporte.setExceFuncts(["rep.renderToExcel()", "rep.printPDF()", "rep.previewHTML()", "rep.renderToTxt()"]);
    	Reporte.create();
    	dialogsReporte.showModal();
	},

	coreUpdate: function(typeReport) {
        var rlx = xmlStructs.createRecordList("rlx");
        if (pcbRepoCanAluInsPeriodo.valid(dialogsRepoCanAluInscritos)) {
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	rlx.add('reg', pcbRepoCanAluInsCarrera.setModeReturnGetText(2));
        	rlx.add('reg', pcbRepoCanAluInsCarrera.setModeReturnGetText(2));
        	rlx.add('reg', pcbRepoCanAluInsPeriodo);
        	
            if (typeReport == 1) {
            	rlx.addStr('reg', 'inscrip');
            	Tool.cnnSrv('ReportObject', 'getCantAlumnoInscrito', this.windowName + '.reporte()', rlx);
            }
            else if (typeReport == 0) {
            	rlx.addStr('reg', 'listado');
            	rlx.add('reg', pcbRepoCanAluInsEdo);
            	rlx.add('reg', calendarRepoCanAluInsDesde);
            	rlx.add('reg', calendarRepoCanAluInsHasta);
            	rlx.add('reg', pcbRepoCanAluInsPosicion);
            	Tool.cnnSrv('ReportObject', 'getCantAlumnoInscrito', this.windowName + '.reporteListado()', rlx);
            }
            else {
                if (pcbRepoCanAluInsCarrera.valid(dialogsRepoCanAluInscritos))
                    if (pcbRepoCanAluInsPosicion.valid(dialogsRepoCanAluInscritos)) {
                    	rlx.addStr('reg', 'noinscrip');
                    	rlx.add('reg', pcbRepoCanAluInsPosicion);
                    	Tool.cnnSrv('ReportObject', 'getCantAlumnoInscrito', this.windowName + '.reporteNoInscritos()', rlx);
                    }
            }
        }
    }
}
