using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angularjs_CrudeWithService_route.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Angularjs_CrudeWithService_route
{
    public class Startup
    {
        public Startup(IConfiguration configuration) { this.Configuration = configuration; }
        private IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<EmployeeDbContext>(o => o.UseSqlServer(this.Configuration.GetConnectionString("EmpDb")));
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}

