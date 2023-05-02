import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DateFormat = ( date: Date) => {
  return format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", { locale: ptBR });
};