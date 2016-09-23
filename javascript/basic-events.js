function next_page() {
	if (page >= vrvToolkit.getPageCount()) {
		return;
	}

	page = page + 1;
	load_page();
};

function prev_page() {
	if (page <= 1) {
		return;
	}

	page = page - 1;
	load_page();
};

function first_page() {
	page = 1;
	load_page();
};

function last_page() {
	page = vrvToolkit.getPageCount();
	load_page();
};

function apply_zoom() {
	set_options();
	vrvToolkit.redoLayout();

	page = 1;
	load_page();
}

function zoom_out() {
	if (zoom < 20) {
		return;
	}

	zoom = zoom / 2;
	apply_zoom();
}

function zoom_in() {
	if (zoom > 80) {
		return;
	}

	zoom = zoom * 2;
	apply_zoom();
}

function process_basic_events(event) {
    if (event.ctrlKey && (event.keyCode == 37)) {
        first_page();
    }
    else if (event.keyCode == 37) {
        prev_page();
    }
    else if (event.ctrlKey && (event.keyCode == 39)) {
        last_page();
    }
    else if (event.keyCode == 39) {
        next_page();
    }
    // see http://www.javascripter.net/faq/keycodes.htm
    else if ((event.keyCode == 107) || (event.keyCode == 187) || (event.keyCode == 61)) {
        zoom_in();
    }
    else if ((event.keyCode == 109) || (event.keyCode == 189) || (event.keyCode == 173)) {
        zoom_out();
    }
}