import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedExhibit, setSelectedExhibit] = useState<number | null>(null);

  const exhibitions = [
    {
      id: 1,
      title: 'Древние цитрусовые',
      description: 'Путешествие от Азии до Средиземноморья',
      period: '2000 до н.э. - 500 н.э.',
      image: '🍊'
    },
    {
      id: 2,
      title: 'Эпоха Возрождения',
      description: 'Апельсины в искусстве и культуре',
      period: '1400-1600 гг.',
      image: '🎨'
    },
    {
      id: 3,
      title: 'Современная селекция',
      description: 'Наука и технологии выращивания',
      period: '1900-2024 гг.',
      image: '🔬'
    }
  ];

  const souvenirs = [
    { name: 'Магнит "Апельсин"', price: '250₽', emoji: '🧲' },
    { name: 'Открытка музейная', price: '150₽', emoji: '💌' },
    { name: 'Книга "История апельсина"', price: '890₽', emoji: '📚' },
    { name: 'Набор мармелада', price: '450₽', emoji: '🍬' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-float">🍊</div>
              <h1 className="text-2xl font-bold text-primary">Музей Апельсина</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#history" className="text-sm font-medium hover:text-primary transition-colors">История</a>
              <a href="#exhibits" className="text-sm font-medium hover:text-primary transition-colors">Экспозиции</a>
              <a href="#tour" className="text-sm font-medium hover:text-primary transition-colors">3D-Тур</a>
              <a href="#tickets" className="text-sm font-medium hover:text-primary transition-colors">Билеты</a>
              <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">Магазин</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Ticket" size={18} className="mr-2" />
              Купить билет
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/30 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm">
              Единственный в России
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Откройте мир<br />
              <span className="text-primary">солнечного фрукта</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в 4000-летнюю историю апельсина через интерактивные экспозиции и виртуальные туры
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать 3D-тур
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary/10">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать экскурсию
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="history" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">История апельсина</h2>
            <p className="text-xl text-muted-foreground">От древнего Китая до современных садов</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {[
                { year: '2000 до н.э.', title: 'Зарождение', text: 'Первые упоминания цитрусовых в Китае и Индии' },
                { year: '1000 н.э.', title: 'Путь на Запад', text: 'Арабские торговцы привозят апельсины в Средиземноморье' },
                { year: '1493', title: 'Новый Свет', text: 'Колумб привозит семена апельсина в Америку' },
                { year: '1850', title: 'Золотая лихорадка', text: 'Калифорния становится центром выращивания апельсинов' },
                { year: '2024', title: 'Современность', text: 'Апельсин - самый популярный цитрусовый фрукт в мире' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-primary">{item.year}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">{item.title}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.text}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="exhibits" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Экспозиции и выставки</h2>
            <p className="text-xl text-muted-foreground">Погрузитесь в мир апельсинов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exhibitions.map((exhibit) => (
              <Card 
                key={exhibit.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  selectedExhibit === exhibit.id ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedExhibit(exhibit.id)}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{exhibit.image}</div>
                  <CardTitle className="text-2xl">{exhibit.title}</CardTitle>
                  <Badge className="w-fit bg-secondary text-secondary-foreground">{exhibit.period}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exhibit.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Eye" size={18} className="mr-2" />
                    Смотреть экспозицию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tour" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/30 shadow-2xl">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Globe" size={48} />
                  <div>
                    <h2 className="text-4xl font-bold">Виртуальный 3D-тур</h2>
                    <p className="text-primary-foreground/90 text-lg">Исследуйте музей не выходя из дома</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <Tabs defaultValue="hall1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="hall1">Зал 1</TabsTrigger>
                    <TabsTrigger value="hall2">Зал 2</TabsTrigger>
                    <TabsTrigger value="hall3">Зал 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="hall1" className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-secondary/50 to-primary/20 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center space-y-4">
                        <div className="text-8xl">🏛️</div>
                        <p className="text-xl font-semibold">Зал древней истории</p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                          <Icon name="Play" size={20} className="mr-2" />
                          Запустить 3D-тур
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Интерактивная экспозиция о происхождении апельсинов в Азии</p>
                  </TabsContent>
                  <TabsContent value="hall2" className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-secondary/50 to-primary/20 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center space-y-4">
                        <div className="text-8xl">🎨</div>
                        <p className="text-xl font-semibold">Художественный зал</p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                          <Icon name="Play" size={20} className="mr-2" />
                          Запустить 3D-тур
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Апельсины в искусстве от Средневековья до наших дней</p>
                  </TabsContent>
                  <TabsContent value="hall3" className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-secondary/50 to-primary/20 rounded-lg flex items-center justify-center border-2 border-primary/20">
                      <div className="text-center space-y-4">
                        <div className="text-8xl">🔬</div>
                        <p className="text-xl font-semibold">Научный зал</p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                          <Icon name="Play" size={20} className="mr-2" />
                          Запустить 3D-тур
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Современные технологии выращивания и селекции</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tickets" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Экскурсии и билеты</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий вариант посещения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: 'Базовый', 
                price: '500₽', 
                features: ['Вход в музей', 'Аудиогид', 'Основные экспозиции'],
                icon: 'Ticket'
              },
              { 
                name: 'Премиум', 
                price: '1200₽', 
                features: ['Всё из Базового', 'Экскурсия с гидом', '3D-тур', 'Сувенир в подарок'],
                icon: 'Star',
                popular: true
              },
              { 
                name: 'Семейный', 
                price: '2500₽', 
                features: ['До 4 человек', 'Детская программа', 'Мастер-класс', 'Фотосессия'],
                icon: 'Users'
              }
            ].map((ticket, index) => (
              <Card 
                key={index}
                className={`relative transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  ticket.popular ? 'border-4 border-primary' : ''
                }`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <Icon name={ticket.icon as any} size={48} className="mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl">{ticket.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary pt-4">{ticket.price}</div>
                  <CardDescription>за человека</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Магазин сувениров</h2>
            <p className="text-xl text-muted-foreground">Унесите частичку музея с собой</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {souvenirs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="text-6xl mb-2">{item.emoji}</div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">{item.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
              <Icon name="Store" size={20} className="mr-2" />
              Посмотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты и режим работы</h2>
            <p className="text-xl text-muted-foreground">Мы всегда рады гостям</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="MapPin" className="text-primary" />
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">Адрес:</p>
                  <p className="text-muted-foreground">г. Москва, ул. Апельсиновая, д. 5</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Телефон:</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Email:</p>
                  <p className="text-muted-foreground">info@orangemuseum.ru</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Clock" className="text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { day: 'Понедельник', time: 'Выходной' },
                    { day: 'Вторник - Пятница', time: '10:00 - 19:00' },
                    { day: 'Суббота - Воскресенье', time: '11:00 - 20:00' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="font-semibold">{schedule.day}</span>
                      <span className="text-primary font-bold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  * Последний вход за 1 час до закрытия
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🍊</div>
                <h3 className="text-xl font-bold">Музей Апельсина</h3>
              </div>
              <p className="text-sm text-background/70">
                Единственный в России музей, посвящённый истории и культуре апельсина
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#history" className="hover:text-primary transition-colors">История</a></li>
                <li><a href="#exhibits" className="hover:text-primary transition-colors">Экспозиции</a></li>
                <li><a href="#tour" className="hover:text-primary transition-colors">3D-Тур</a></li>
                <li><a href="#tickets" className="hover:text-primary transition-colors">Билеты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">О музее</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила посещения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="bg-transparent border-background/30 hover:border-primary hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-background/30 hover:border-primary hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-background/30 hover:border-primary hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
            <p>© 2024 Музей Апельсина. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
