# Diretrizes do Repositório para Agentes de IA

Sempre que gerar código ou revisar Pull Requests neste repositório, siga estritamente estas regras:

1. **Idioma:** Todos os comentários de código, mensagens de erro e nomes de variáveis devem estar em **Português (pt-BR)**.
2. **Estilo de Código:**
   - Prefira funções puras e `early return` (evite `else` desnecessários).
   - Nunca utilize `var` em JavaScript/TypeScript; use apenas `const` ou `let`.
3. **Segurança:**
   - Jamais concatene strings diretamente em consultas SQL ou chamadas de shell.
   - Valide todas as entradas de usuário no início da função.
4. **Testes:** Toda nova função criada deve incluir pelo menos um teste unitário correspondente.