function nextPage() {
	if (page >= vrvToolkit.getPageCount()) {
		return;
	}

	page = page + 1;
	loadPage();
};

function prevPage() {
	if (page <= 1) {
		return;
	}

	page = page - 1;
	loadPage();
};

function firstPage() {
	page = 1;
	loadPage();
};

function lastPage() {
	page = vrvToolkit.getPageCount();
	loadPage();
};

function applyZoom() {
	setOptions();
	vrvToolkit.redoLayout();

	page = 1;
	loadPage();
}

function zoomOut() {
	if (zoom < 20) {
		return;
	}

	zoom = zoom / 2;
	applyZoom();
}

function zoomIn() {
	if (zoom > 80) {
		return;
	}

	zoom = zoom * 2;
	applyZoom();
}

function processBasicEvents(event) {
    if (event.ctrlKey && (event.keyCode == 37)) {
        firstPage();
    }
    else if (event.keyCode == 37) {
        prevPage();
    }
    else if (event.ctrlKey && (event.keyCode == 39)) {
        lastPage();
    }
    else if (event.keyCode == 39) {
        nextPage();
    }
    // see http://www.javascripter.net/faq/keycodes.htm
    else if ((event.keyCode == 107) || (event.keyCode == 187) || (event.keyCode == 61)) {
        zoomIn();
    }
    else if ((event.keyCode == 109) || (event.keyCode == 189) || (event.keyCode == 173)) {
        zoomOut();
    }
}