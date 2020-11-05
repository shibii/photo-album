import './overlay.css.proxy.js';
/* src\components\overlay.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	attr,
	check_outros,
	component_subscribe,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	toggle_class,
	transition_in,
	transition_out
} from "../../web_modules/svelte/internal.js";

import { overlay } from "../stores/overlay.js";
import Photo from "./photo.js";

function create_if_block(ctx) {
	let photo;
	let current;

	photo = new Photo({
			props: {
				sizes: "100vw",
				photo: /*$overlay*/ ctx[1],
				alt: "generic",
				overlay: true
			}
		});

	return {
		c() {
			create_component(photo.$$.fragment);
		},
		m(target, anchor) {
			mount_component(photo, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const photo_changes = {};
			if (dirty & /*$overlay*/ 2) photo_changes.photo = /*$overlay*/ ctx[1];
			photo.$set(photo_changes);
		},
		i(local) {
			if (current) return;
			transition_in(photo.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(photo.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(photo, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let current;
	let mounted;
	let dispose;
	let if_block = /*$overlay*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			if (if_block) if_block.c();
			attr(div, "class", "overlay svelte-1djj8h1");
			toggle_class(div, "visible", /*visible*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block) if_block.m(div, null);
			current = true;

			if (!mounted) {
				dispose = listen(div, "click", /*click_handler*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*$overlay*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$overlay*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (dirty & /*visible*/ 1) {
				toggle_class(div, "visible", /*visible*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $overlay;
	component_subscribe($$self, overlay, $$value => $$invalidate(1, $overlay = $$value));
	const click_handler = () => overlay.set(null);
	let visible;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$overlay*/ 2) {
			$: $$invalidate(0, visible = $overlay ? true : false);
		}
	};

	return [visible, $overlay, click_handler];
}

class Overlay extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Overlay;