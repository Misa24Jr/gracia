var dialogsResuBusMovils = new Object();
var gridsResuBusMovils = new Object();
var hideIdCedula = new Object();
var hideDeNombre = new Object();
var hideDeApellido = new Object();

var ResuBusMovils = {
    windowName: 'ResuBusMovils',
    isCreate: false,
	fnc : new Function(''),

	setObjectExtFnc: function(objCi, objNombre, objApellido, fnc) {
		hideIdCedula = objCi;
		hideDeNombre = objNombre;
		hideDeApellido = objApellido;	
		this.setExtFnc(fnc);
	},
	
	setExtFnc: function(fnc) {
		this.fnc = new Function(fnc);
	},
	
    show: function(){
        if (!this.isCreate) {
            this.init();
            this.isCreate = true;
        }
        dialogsResuBusMovils.setMsg("");			
        gridsResuBusMovils.clean();
        dialogsResuBusMovils.showModal();
    },	

    dialogsResuBusMovils_Init: function(){
        dialogsResuBusMovils.setMinimizeXY(0, 0);
        dialogsResuBusMovils.setCenterScreen();
        dialogsResuBusMovils.setEnableMinimize(false);
        dialogsResuBusMovils.addObjToDialog(gridsResuBusMovils.getObject(), 2, 1);
    },
	
    gridsResuBusMovils_Init: function(){
        gridsResuBusMovils.setFixColRow(false, true);
        gridsResuBusMovils.addTitleVectorX(['Cedula', 'Nombre', 'Apellido', 'idPersona']);
        gridsResuBusMovils.showData();
        gridsResuBusMovils.setSizeCol(1, 74);
        gridsResuBusMovils.setSizeCol(2, 108);
        gridsResuBusMovils.setSizeCol(3, 108);
        gridsResuBusMovils.setSizeCol(4, 0);
        gridsResuBusMovils.hideCol(4);
    },
    
    create: function(){
        dialogsResuBusMovils = dialogs.create('dialogsResuBusMovils', 0, 0, 300, 500, 'BUSQUEDA');
		dialogsResuBusMovils.style.zIndex = '100000';
  		dialogsResuBusMovils.setStaticOrder(true); 
        gridsResuBusMovils = grids.create('gridsResuBusMovils', 25, 4);
    },
    
    init: function(){
        this.create();
        this.setEvents();
        this.dialogsResuBusMovils_Init();
        this.gridsResuBusMovils_Init();
    },
    
    setData: function(){
        if (gridsResuBusMovils.getDataCell(1) != "") {
        	hideIdCedula.hideId = gridsResuBusMovils.getDataCell(4);
            hideIdCedula.setValue(gridsResuBusMovils.getDataCell(1));
			hideDeNombre.setValue(gridsResuBusMovils.getDataCell(2));
            hideDeApellido.setValue(gridsResuBusMovils.getDataCell(3));
            this.fnc();
			dialogsResuBusMovils.close();
        }
    },

    setEvents: function(){
    	gridsResuBusMovils.onClickCells(this.windowName + ".setData()");
//    	gridsResuBusMovils.onEnter(this.windowName + ".setData()");
    	gridsResuBusMovils.onEscape("dialogsResuBusMovils.close()");
    }
};
