function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = ()=> {
        this.capturaCliques();
        this.capturaEnter();
    }
    
    this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
        if(e.key !== 'Enter') return ;
        this.eq();
            
        
        

    })
    }

    
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.limpa();
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.eq(el);
        })
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.limpa = el => this.display.value = ' ';
    this.del = el => this.display.value = this.display.value.slice(0, -1);
    this.eq = () => {
        
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta Inválida');
                return;
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return
        }
    
    }
   
     

}
const calculadora = new Calculadora();
calculadora.inicia();









// Calculadora em Function Factory

// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),
        
        
//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//             this.pressionaBackSpace();
//         },

//         pressionaEnter(){
//             this.display.addEventListener('keyup', e =>{
//                 if (e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },
//         pressionaBackSpace() {
//             this.display.addEventListener('keydown', e => {
                
//               if (e.keyCode === 32) {
//                 e.preventDefault();
//                 this.clearDisplay();
//               }
//             });
//           },

//         clearDisplay(){
//             this.display.value = '';
//         },

//         apagaUm(){
//             this.display.value = this.display.value.slice(0, -1);

//         },

//         realizaConta(){
//             let conta = this.display.value;
            
//             try {
//                 conta = eval(conta);

//                 if(!conta){
//                     alert('Conta inválida');
//                     return;
//                 }

//                 this.display.value = conta;
//             } catch(e){
//                 alert('Conta inválida');
//                 return;
//             }
//         },
        
       

//         cliqueBotoes() {
//             document.addEventListener('click', e => {
//                 const el = e.target;
                
//                 if(el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')){
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')){
//                     this.apagaUm();
//                 }

//                 if(el.classList.contains('btn-eq')){
//                     this.realizaConta();
//                 }

//                 this.display.focus();
//             });
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;

            
//         }
//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

