export function logarTempoDeExecucao(emSeg: boolean = false) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const metodoOriginal = descriptor.value;
    
    descriptor.value = function(...args:any[]) {
      let unidade = 'ms';
      let divisor = 1;
      if(emSeg){
        unidade ='s';
        divisor =1000;
      }
      console.log('----------------------------');
      console.log(`Parametros: ${propertyKey}: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this,args);
      const t2 = performance.now();
      console.log(`Retorno ${propertyKey}: ${JSON.stringify(args)}`);
      console.log(`Execução do método ${propertyKey} - ${(t2 - t1)/divisor} ${unidade}`);
      return retorno;
    }
    return descriptor;
  }
}