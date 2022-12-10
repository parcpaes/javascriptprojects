const file = require('fs');
const path = require('node:path');

import {screen, getAllByRole} from '@testing-library/dom';
import '@testing-library/dom';

const html = file.readFileSync(path.resolve(__dirname, 'index.html'));

describe('Test Process UI',()=>{
    beforeEach(()=>{
        document.documentElement.innerHTML = html.toString();
    });

    test('document node exists',()=>{
        expect(document).not.toBeUndefined();
    })
})