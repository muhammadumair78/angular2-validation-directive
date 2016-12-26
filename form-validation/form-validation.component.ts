import { Component, Input, OnInit, DoCheck } from '@angular/core';

import { camelcasetonormal } from '../camelcase-to-normal.pipe';

@Component({
    selector: 'form-validation',
    templateUrl: './form-validation.component.html'
})

export class FormValidationComponent implements DoCheck, OnInit {
    
    @Input() model: any;
    @Input() visible: any;

    public input: any;

    constructor(){
    }

    ngOnInit(): void {
    }

    ngDoCheck() {
        // Dirty logic to display one error at a time.
        this.input = {};
        if(this.model.errors){
            if(this.model.errors.required){
                this.input.required = this.model.errors.required;
            } else if(this.model.errors.minlength){
                this.input.minlength = this.model.errors.minlength;
            } else if(this.model.errors.maxlength){
                this.input.maxlength = this.model.errors.maxlength;
            } else if(this.model.errors.pattern){
                this.input.pattern = this.model.errors.pattern;
            } else if(this.model.errors.validateEqual === false){
                this.input.validateEqual = this.model.errors.validateEqual;
            }
        }
    }


}
