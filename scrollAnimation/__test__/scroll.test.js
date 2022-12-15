const file = require('fs');
const path = require('node:path');

import '@testing-library/jest-dom';

import {ScrollContainer} from '../ScrollContainer.js';

const html = file.readFileSync(path.resolve(__dirname, '../index.html'));


describe('Scroll Container',()=>{
    let scrollContainer;
    beforeEach(()=>{
        document.body.innerHTML = html.toString();
        const container = document.getElementById('container');
        scrollContainer = new ScrollContainer(container);
        jest.spyOn(ScrollContainer.prototype,'isVisible').mockImplementation(()=> true);
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });
    describe('when scroll down',()=>{
        it('should show all the elements',()=>{
            scrollContainer.down();
            const container = document.getElementById('container');
            const elements = container.children.length;
            const firstElementChild = container.firstElementChild;
            const lastElementChild = container.lastElementChild;
    
            expect(ScrollContainer.prototype.isVisible).toHaveBeenCalledTimes(elements);
    
            expect(firstElementChild).not.toBeUndefined();
            expect(firstElementChild).toHaveClass('show');
            expect(lastElementChild).toHaveClass('show');
        });
    })
    
    describe('when scroll up',()=>{
        it('should hide all the element ',()=>{
            scrollContainer.up();
            const container = document.getElementById('container');
            const firstElementChild = container.firstElementChild;
            const lastElementChild = container.lastElementChild;
    
            expect(firstElementChild).not.toHaveClass('show');
            expect(lastElementChild).not.toHaveClass('show');
        });
    })
    
})