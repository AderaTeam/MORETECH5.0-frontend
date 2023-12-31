# Описание компонентов
**AppRouter** — компонент маршрутизации всего проекта, использует вспомогательный компонент маршрутизации, разделяет роутинг для авторизованных и неавторизированных пользователей. Предотвращает поломки других компонентов путем переноса пользователя на главную страницу.
<br>**AuthPage** - компонент авторизации и логина, использует экземпляр класса UserStore.
<br>**MapComponent** - компонет отвечающий за отрисовку карты, отделений банка и маршрутов. Определяет длительность пути различными способами передвижения.
# Описание классов
**UserStore** - класс, отвечающий за хранение информации о пользователе приложения, содержит себе методы регистрации, авторизации, выхода из аккаунта, проверки авторизации.
<br> **MapStore** - класс, который содержит в себе поля и методы для получения информации об отделениях, их загруженности и предоставляемых услугах.   
# Описание констант
- **HOME_ROUTE** - переход на главную страницу.
- **MAP_ROUTE** - переход на карту.
- **LOGIN_ROUTE**- переход на страницу логина.
- **REGISTRATION_ROUTE**- переход на страницу регистрации.
- **MAPROUTE_ROUTE** переход на карту с простроенным маршрутом.
- **authRoutes** - определяет страницы доступные для навигации авторизированного пользователя.
- **publicRoutes** - определяет страницы доступные для навигации неавторизированного пользователя.
# Описание интерфейсов
**Интерфейс пользователя** - интерфейс, имеющий следующие поля:
- email: string;
- id: string;
- username: string;
<br>**Интерфейс результата анализа загруженности** - интерфейс, который характеризует отделение и статус его загруженности и  имеет следующие поля:
 - office: IMap,
 - crowd: string,
 <br>**Интерфейс положения пользователя** - интерфейс, имеющий следующие поля:
 - latitude: number,
 - longitude: number,
 - address?: string


