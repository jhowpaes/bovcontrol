function getStatusMessages(statusCode: number | null): { errorMessage: string; userMessage: string } {
  const statusMessages: { [key: number]: { errorMessage: string; userMessage: string } } = {
    400: {
      errorMessage: 'Bad Request',
      userMessage: 'Requisição inválida',
    },
    401: {
      errorMessage: 'Unauthorized',
      userMessage: 'Não autorizado',
    },
    403: {
      errorMessage: 'Forbidden',
      userMessage: 'Acesso negado',
    },
    404: {
      errorMessage: 'Not Found',
      userMessage: 'Recurso não encontrado',
    },
    500: {
      errorMessage: 'Internal Server Error',
      userMessage: 'Erro interno do servidor',
    },
  };

  const defaultMessage = {
    errorMessage: 'Unknown Error',
    userMessage: 'Erro desconhecido',
  };

  return statusCode ? statusMessages[statusCode] || defaultMessage : defaultMessage;
}
