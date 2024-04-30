var dialogsRepoInfoAlumno = {};
var editsRepoInfoCedula = {};
var editsRepoInfoNombre = {};
var editsRepoInfoApellido = {};
var editsRepoInfoHistoria = {};
var imgButtonsRepoInfoBuscar = {};
var imgButtonsRepoInfoSalir = {};
var mwRepoInfoAlumno = {};// minWindow

var RepoInfoAlumno = {
    windowName : 'RepoInfoAlumno',
    isCreate: false,
    
    show: function() {
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        if (dialogsRepoInfoAlumno.isByClean())
			this.limpiar();			
		dialogsRepoInfoAlumno.show();
	},
	
    hide: function() {
        dialogsRepoInfoAlumno.hide();
    },
    createMWs: function() {
    	mwRepoInfoAlumno = desktop.addMinWindow('Info', this.windowName + '.show()', this.windowName + '.hide()', this.windowName + '.hide()');
        dialogsRepoInfoAlumno.setMinWindowEvent('mw' + this.windowName + '.hide()','mw' + this.windowName + '.disable()','mw' + this.windowName + '.show()');
    },

    dialogsRepoInfoAlumno_Init : function() {
        dialogsRepoInfoAlumno.setMinimizeXY(0,0);
        dialogsRepoInfoAlumno.setCenterScreen();
        dialogsRepoInfoAlumno.addSpace(0,0,20);
        dialogsRepoInfoAlumno.addLn(1,1,1);
		dialogsRepoInfoAlumno.setHeightCell(1,1,13);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoCedula,2,1,24);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoNombre,3,1,24);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoApellido,4,1,24);
		dialogsRepoInfoAlumno.addObjToDialog(editsRepoInfoHistoria,5,1,24);
		dialogsRepoInfoAlumno.addLn(6,1,1);
		dialogsRepoInfoAlumno.setHeightCell(6,1,20);
		dialogsRepoInfoAlumno.addObjToDialog(imgButtonsRepoInfoBuscar,7,1);
        dialogsRepoInfoAlumno.addObjToDialog(imgButtonsRepoInfoSalir,7,1);
        dialogsRepoInfoAlumno.adjAllMarginObj(7,1,30);
        dialogsRepoInfoAlumno.leftMarginObj(7,1,0,25); 
    },

    create : function() {
    	dialogsRepoInfoAlumno = dialogs.create('dialogsRepoInfoAlumno',0,0,303,148,'INFORMACIÓN');
    	dialogsRepoInfoAlumno.setAdjY(80);
    	editsRepoInfoCedula = edits.create('editsRepoInfoCedula','editsRepoInfoCedula','C.i.:',1,72,'normal');
    	editsRepoInfoCedula.setValidInteger();
      	editsRepoInfoCedula.setFieldFind(true);
		editsRepoInfoCedula.setSizeEdit(190);
      	editsRepoInfoNombre = edits.create('editsRepoInfoNombre','editsRepoInfoNombre','Nombre:',1,72,'normal');
      	editsRepoInfoNombre.setValidEmpty();
      	editsRepoInfoNombre.setFieldFind(true);
		editsRepoInfoNombre.setSizeEdit(190);
      	editsRepoInfoApellido = edits.create('editsRepoInfoApellido','editsRepoInfoApellido','Apellido:',1,72,'normal');
      	editsRepoInfoApellido.setValidEmpty();
      	editsRepoInfoApellido.setFieldFind(true);
		editsRepoInfoApellido.setSizeEdit(190);
      	editsRepoInfoHistoria = edits.create('editsRepoInfoHistoria','editsRepoInfoHistoria','N° Historia:',1,72,'normal');
      	editsRepoInfoHistoria.readOnly(true);
		editsRepoInfoHistoria.setSizeEdit(190);
    	imgButtonsRepoInfoBuscar = imgButtons.create('imgButtonsRepoInfoBuscar','Buscar','icono_buscar.png');
      	imgButtonsRepoInfoSalir = imgButtons.create('imgButtonsRepoInfoSalir','Salir','salir.png');
    	imgButtonsRepoInfoBuscar.setDimension(90,22);
    	imgButtonsRepoInfoSalir.setDimension(90,22);
      	this.isCreate=true;
	},

	init : function() {
		this.create();
		this.setEvents(); 
		this.dialogsRepoInfoAlumno_Init();
		this.createMWs();
	},
	
	limpiarFind : function(ix) {
		editsRepoInfoCedula.hideId = -1;
		editsRepoInfoHistoria.clear();
		
  		switch (ix) {
		case 1: 
			editsRepoInfoNombre.setValue("");
			editsRepoInfoApellido.setValue("");  		
			break;
		case 2: 
			editsRepoInfoCedula.setValue("");
			editsRepoInfoApellido.setValue("");  		
			break;
		default:
			editsRepoInfoCedula.setValue("");
		    editsRepoInfoNombre.setValue("");
			break;
		} 
  	},

   	buscar : function() {
		var rlx = xmlStructs.createRecordList("rlx");

    	if (editsRepoInfoCedula.getValue() != '' && editsRepoInfoNombre.getValue() != '' && editsRepoInfoApellido.getValue() != '') {
	  		this.coreUpdate();
		}
		else if (editsRepoInfoCedula.getValue() != '' || editsRepoInfoNombre.getValue() != '' || editsRepoInfoApellido.getValue() != '') {
        	ResuBusqueda.setObjectExtFnc(editsRepoInfoCedula, editsRepoInfoNombre, editsRepoInfoApellido, 'RepoInfoAlumno.buscar()');
			Tool.getGridData('InscripObject', 'getBuscarPersona', dialogsResuBusqueda, gridsResuBusqueda, 'ResuBusqueda', editsRepoInfoCedula, editsRepoInfoCedula, editsRepoInfoNombre, editsRepoInfoNombre, editsRepoInfoApellido, editsRepoInfoApellido);
		}
		else {
			Alert.show('Ingrese una C.i, Nombre o Apellido', 'SISTEMA', Alert.TYPE_INFO);
		}
   	},
	
    limpiar : function() {
    	editsRepoInfoCedula.hideId = -1;
  		editsRepoInfoCedula.setValue(""); 
  		editsRepoInfoNombre.setValue(""); 
  		editsRepoInfoApellido.setValue(""); 
  		editsRepoInfoHistoria.clear();
  		dialogsRepoInfoAlumno.setMsg("");
	},

	setEvents: function() {
		editsRepoInfoCedula.onEnter(this.windowName + ".buscar()");
  		editsRepoInfoCedula.onChange(this.windowName + ".limpiarFind(1)");
  		editsRepoInfoCedula.onClick(this.windowName + ".limpiarFind(1)");
  		editsRepoInfoNombre.onEnter(this.windowName + ".buscar()");
  		editsRepoInfoNombre.onChange(this.windowName + ".limpiarFind(2)");
  		editsRepoInfoNombre.onClick(this.windowName + ".limpiarFind(2)");
  		editsRepoInfoApellido.onEnter(this.windowName + ".buscar()");
  		editsRepoInfoApellido.onChange(this.windowName + ".limpiarFind(3)");
  		editsRepoInfoApellido.onClick(this.windowName + ".limpiarFind(3)");
  		imgButtonsRepoInfoBuscar.onClick(this.windowName + ".buscar()");
        imgButtonsRepoInfoSalir.onClick('dialogsRepoInfoAlumno.close()');
    },
	
	loadHistory: function() {
		editsRepoInfoHistoria.setValue(json("getInfoFicha").data[0][0]);
	},
	
	coreUpdate: function() {
        var rlx = xmlStructs.createRecordList("rlx");

        if (editsRepoInfoCedula.valid(dialogsRepoInfoAlumno))
			if (editsRepoInfoNombre.valid(dialogsRepoInfoAlumno))
				if (editsRepoInfoApellido.valid(dialogsRepoInfoAlumno)) { 
					rlx.addInt('reg', editsRepoInfoCedula.hideId);
					Tool.cnnSrv('ReportObject', 'getInformacion', this.windowName + '.loadHistory()', rlx);
				}
    }
};

