const file = require('fs');
const path = require('node:path');

import {screen, getAllByRole} from '@testing-library/dom';
import '@testing-library/jest-dom';
import { ProgressBar } from './progressbar';


const html = file.readFileSync(path.resolve(__dirname, 'index.html'));

let progressBar;

describe('Test Process bar Stepper UI',()=>{
    beforeEach(()=>{
        document.body.innerHTML = html.toString();
        const circle = document.querySelector('.active');

        progressBar = new ProgressBar(circle);

        const nextButton = screen.getByRole('button',{name:/next/i});
        nextButton.onclick = ()=> progressBar.nextStep();
 
        const prevButton = screen.getByRole('button',{name:/prev/i});
        prevButton.onclick = ()=> progressBar.previousStep();
    });

    test('document node exists',()=>{
        expect(document).not.toBeUndefined();
    });

    test('Initial step',()=>{
        const circle1 = screen.getByText('1');

        expect(circle1).not.toBeUndefined();
        expect(circle1).toHaveClass('active');
    })

    test('Click Next Step',()=>{        
        const nextButton = screen.getByRole('button',{name:/next/i}); 
        nextButton.click();

        const circle2 = screen.getByText('2');
        expect(circle2).not.toBeUndefined();
        expect(circle2).toHaveClass('active');
    });
    
    test('Click previous first step',()=>{   
        const prevButton = screen.getByRole('button',{name:/prev/i});           
        prevButton.click();
        const circle1 = screen.getByText('1');
        
        expect(circle1).not.toBeUndefined();
        expect(circle1).toHaveClass('active');
    });

    test('Click 4 times next and 1 time previous',()=>{
        const nextButton = screen.getByRole('button',{name:/next/i}); 
        nextButton.click();
        nextButton.click();
        nextButton.click();
        nextButton.click();
        
        const prevButton = screen.getByRole('button',{name:/prev/i});           
        prevButton.click();

        const circle4 = screen.getByText('4');
        expect(circle4).not.toHaveClass('active');
        
        const circle3 = screen.getByText('3');
        expect(circle3).toHaveClass('active');

        const circle2 = screen.getByText('2');
        expect(circle2).toHaveClass('active');

        const circle1 = screen.getByText('1');
        expect(circle1).toHaveClass('active');
    })
})