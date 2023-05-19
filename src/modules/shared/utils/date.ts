import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DateFormat = ( date: Date) => {
  if (!date) {
    return;
  }
  return format(new Date(date), "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", { locale: ptBR });
};