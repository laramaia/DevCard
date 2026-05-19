import { createContext, useContext, useState, ReactNode } from 'react';

type CardData = {
  name: string;
  role: string;
  company: string;
  specialty: string;
  experience: string;
  color: string;
};

type CardContextType = {
  cardData: CardData;
  updateCardData: (data: Partial<CardData>) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

type CardProviderProps = {
  children: ReactNode;
};

export function CardProvider({ children }: CardProviderProps) {
  const [cardData, setCardData] = useState<CardData>({
    name: '',
    role: '',
    company: '',
    specialty: '',
    experience: '',
  });

  function updateCardData(data: Partial<CardData>) {
    setCardData((prev) => ({
      ...prev,
      ...data,
    }));
  }

  return (
    <CardContext.Provider value={{ cardData, updateCardData }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard deve ser usado dentro de CardProvider');
  }

  return context;
}