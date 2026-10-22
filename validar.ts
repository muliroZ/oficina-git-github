export function validarCpf(cpf: string): boolean {
  if (typeof cpf !== 'string') {
    return false;
  }

  return /^\d{11}$/.test(cpf);
}
