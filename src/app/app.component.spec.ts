import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
//describe es una suite de pruebas
describe('AppComponent', () => {
  //beforeAll se ejecuta una vez antes de ejecutar todas las pruebas
  //beforeEac se eejcuta antes de cada it
  beforeEach(async(() => {
    //TestBed.configureTestingModule simula el modulo que contiene el componente
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  //afterAll se ejecuta alfinal de toda la suite
  //afterEach se ejecuta despues de cada it
  
  //it se refiere a una prueba atomica
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect es el assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'heroes-agency'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('heroes-agency');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('heroes-agency app is running!');
  });
});
