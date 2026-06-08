import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { UserRepository } from './../src/modules/user/repositories/user-repository';

describe('User Authentication & Role Authorization (e2e)', () => {
  let app: INestApplication<App>;
  let userRepository: UserRepository;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get<UserRepository>(UserRepository);

    const users = await userRepository.findAll();
    for (const u of users) {
      if (u.email.includes('test_auth_role')) {
        await userRepository.deleteUser(u.id);
      }
    }
  });

  afterAll(async () => {
    const users = await userRepository.findAll();
    for (const u of users) {
      if (u.email.includes('test_auth_role')) {
        await userRepository.deleteUser(u.id);
      }
    }
    await app.close();
  });

  it('should allow anyone to register a user', async () => {
    const response = await request(app.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Regular Test User',
        email: 'regular_test_auth_role@example.com',
        password: 'password123',
        role: 'user',
      })
      .expect(201);

    expect(response.body.message).toBe('Usuário criado com sucesso');
  });

  it('should allow anyone to register an admin user', async () => {
    const response = await request(app.getHttpServer())
      .post('/users/register')
      .send({
        name: 'Admin Test User',
        email: 'admin_test_auth_role@example.com',
        password: 'password123',
        role: 'admin',
      })
      .expect(201);

    expect(response.body.message).toBe('Usuário criado com sucesso');
  });

  it('should reject access to GET /users when not authenticated', async () => {
    await request(app.getHttpServer()).get('/users').expect(401);
  });

  it('should reject access to GET /users for non-admin users', async () => {
    const loginResponse = await request(app.getHttpServer())
      .post('/users/login')
      .send({
        email: 'regular_test_auth_role@example.com',
        password: 'password123',
      })
      .expect(200);

    const token = loginResponse.body.user.access_token;
    expect(token).toBeDefined();

    const response = await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(403);

    expect(response.body.message).toBe('Acesso restrito a administradores.');
  });

  it('should allow access to GET /users for admin users', async () => {
    const loginResponse = await request(app.getHttpServer())
      .post('/users/login')
      .send({
        email: 'admin_test_auth_role@example.com',
        password: 'password123',
      })
      .expect(200);

    const token = loginResponse.body.user.access_token;
    expect(token).toBeDefined();

    const response = await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body.message).toBe('Lista de usuários');
    expect(response.body.users).toBeDefined();
  });
});
