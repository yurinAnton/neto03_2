import loadUser from "../loadUser";
import { httpGet } from "../http";
jest.mock('../http'); // - указывает что глушить

beforeEach(() => {
    jest.resetAllMocks();
}); // - сбрасывает все моки перед тестом

test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

// beforeEaech - запускается перед каждым тестом
// afterEaech - запускается после каждым тестом
// beforeAll - запускается перед всеми тестами
// afterAll - запускается после всех тестов