# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Alura

## Binding

### Property Binding

Vai do **Componente** para o **Template**:

```html
{{ valor }} - Interpolação
[value]="pensamento.conteudo"
```

### Event Binding

Vai do **Template** para o **Componente**:

```html
(click)="criarPensamento()"
```

### Two-way Data Binding

Vai do **Componente** para o **Template** e vice-versa:

```html
[(ngModel)]="pensamento.conteudo"
```

## Diretivas

### Diretivas de componentes

Usado com um modelo. Esse tipo de diretiva é a mais comum.
Ex: <app-listarPensamentos>.

### Diretivas estruturais

Altera o layout do DOM adicionando e removendo elementos DOM.
Ex: NgIf, NgFor. NgSwitch.

### Diretivas de atributos

Altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.
Ex: NgClass, NgStyle.
