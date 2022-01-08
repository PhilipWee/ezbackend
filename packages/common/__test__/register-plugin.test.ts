import { EzBackend } from '../src';

describe('Plugin Registering', () => {
  let app: EzBackend;

  const defaultConfig = {
    backend: {
      fastify: {
        logger: false,
      },
      typeorm: {
        database: ':memory:',
      },
    },
  };

  beforeEach(() => {
    app = new EzBackend();

    // Prevent server from starting
    app.removeHook('_run', 'Run Fastify Server');
  });

  afterEach(async () => {
    await app.close()

  });

  it('Top level plugin should be properly prefixed', async () => {
    app.setHandler('Register plugin', async (instance, opts) => {
      instance.server.register(
        async (server, opts) => {
          expect(server.prefix).toBe('/prefix');
        },
        { prefix: 'prefix' },
      );
    });
    await app.start(defaultConfig);
  });

  it('Reply decorators should exist', async () => {
    app.setHandler('Register plugin', async (instance, opts) => {
      instance.server.decorateReply('decorator1', 'test');
      // expect(instance.server.hasReplyDecorator('decorator1')).toBe(true)

      instance.server.register(async (server, opts) => {
        server.decorateReply('decorator2', 'test');
        expect(server.hasReplyDecorator('decorator1')).toBe(true);

        server.register(async (server, opts) => {
          expect(server.hasReplyDecorator('decorator1')).toBe(true);
          expect(server.hasReplyDecorator('decorator2')).toBe(true);
        });
      });
    });
    await app.start(defaultConfig);
  });

  // it("Fastify plugins should have global scope", async () => {

  //     let servers = []

  //     app.setHandler("Register plugin", async (instance, opts) => {

  //         const plugin = fp(async (server: FastifyInstance, opts) => {
  //             servers.push(server)
  //         })

  //         instance.server.register(plugin)
  //     })

  //     app.setRun("Get internal server object", async (instance, opts) => {
  //         servers.push(instance._server)

  //     })

  //     await app.start(defaultConfig)
  //     expect(servers[0]).toBe(servers[1])

  // })

  // it("Fastify plugins within apps should have global scope", async () => {
  //     let servers = []

  //     let childPluginApp = new App()

  //     app.setHandler("Register plugin", async (instance, opts) => {
  //         servers.push(instance.server)
  //     })

  //     childPluginApp.setHandler("Register plugin", async (instance, opts) => {

  //         const plugin = fp(async (server: FastifyInstance, opts) => {
  //             servers.push(server)
  //         })

  //         instance.server.register(plugin)
  //     })

  //     app.addApp("Child Plugin App", childPluginApp)
  //     await app.start(defaultConfig)
  //     expect(servers[0]).toBe(servers[1])

  // })
});
