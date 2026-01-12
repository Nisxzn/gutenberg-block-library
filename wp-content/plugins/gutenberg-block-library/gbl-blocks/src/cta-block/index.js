import Edit from './edit';
import save from './save';

wp.blocks.registerBlockType('gbl/cta', {
    edit: Edit,
    save,
});
