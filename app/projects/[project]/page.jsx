import connectDB from "@/lib/db";
import Project from "@/models/project";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faArrowLeft,
  faCalendar,
  faListCheck,
  faUsers,
  faMoneyBillWave,
  faLayerGroup,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import ProjectActions from "../Components/ProjectActions";

export const dynamic = "force-dynamic";

export default async function ProjectPage({ params }) {
  const { project: projectId } = await params;

  await connectDB();

  let project = null;
  try {
    project = await Project.findById(projectId).lean();
  } catch (error) {
    console.error("Invalid Project ID or DB Error:", error);
  }

  if (project) {
    project._id = project._id.toString();
    project.startDate = project.startDate.toISOString();
    project.endDate = project.endDate.toISOString();
  }

  if (!project) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
          <div className="w-24 h-24 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)]">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-4xl text-red-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">
              Project Not Found
            </h2>
            <p className="text-(--text-muted)">
              The requested operational node ID "{projectId}" does not exist.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-8 py-4 rounded-xl bg-(--color-primary) text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-[0_0_30px_var(--color-primary)] transition-all active:scale-95"
          >
            Return to Matrix
          </Link>
        </div>
      </Container>
    );
  }

  // Convert Date objects to readable strings for display
  const formattedStartDate = new Date(project.startDate).toLocaleDateString(
    undefined,
    { dateStyle: "medium" }
  );
  const formattedEndDate = new Date(project.endDate).toLocaleDateString(
    undefined,
    { dateStyle: "medium" }
  );

  return (
    <Container>
      <div className="flex flex-col gap-8 h-full">
        <Header
          head="Node"
          blueHead="Inspector"
          icon={faCube}
          info="Analyzing"
          notice={project.name}
        >
          <div className="flex items-center gap-3">
            <ProjectActions project={project} />
            <Link
              href="/projects"
              className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-(--text-secondary) font-bold flex items-center gap-2 border border-white/5 hover:border-white/10 active:scale-95"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="text-xs uppercase tracking-widest">Back</span>
            </Link>
          </div>
        </Header>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
            {/* Main Info Card */}
            <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-primary)/5 rounded-full blur-[80px] group-hover:bg-(--color-primary)/10 transition-all duration-1000" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${
                      project.priority === "Critical"
                        ? "text-red-400 border-red-400/30 bg-red-400/5"
                        : project.priority === "High"
                        ? "text-orange-400 border-orange-400/30 bg-orange-400/5"
                        : "text-blue-400 border-blue-400/30 bg-blue-400/5"
                    }`}
                  >
                    {project.priority} Priority
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-(--text-muted) text-[10px] font-black uppercase tracking-widest">
                    {project.type}
                  </div>
                </div>

                <h1 className="text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                  {project.name}
                </h1>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/5 mb-8">
                  <h3 className="text-xs font-black text-(--text-muted) uppercase tracking-widest mb-4">
                    Description
                  </h3>
                  <p className="text-lg text-(--text-secondary) leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatBox
                    label="Status"
                    value={project.status}
                    icon={faListCheck}
                  />
                  <StatBox
                    label="Budget"
                    value={`$${project.budget?.toLocaleString()}`}
                    icon={faMoneyBillWave}
                  />
                  <StatBox
                    label="Team"
                    value={`${project.teamMembers?.length || 0} Members`}
                    icon={faUsers}
                  />
                  <StatBox
                    label="Progress"
                    value={`${project.progress}%`}
                    icon={faLayerGroup}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="flex flex-col gap-6">
              {/* Timeline Card */}
              <div className="p-8 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-8 text-(--text-muted)">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span className="text-xs font-black uppercase tracking-widest">
                    Timeline
                  </span>
                </div>

                <div className="space-y-8 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/5" />

                  <div className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-(--color-primary) bg-(--bg-card) group-hover:scale-110 transition-transform" />
                    <span className="block text-[10px] font-bold text-(--text-muted) uppercase tracking-wider mb-1">
                      Start Date
                    </span>
                    <span className="text-lg font-bold text-white tracking-tight">
                      {formattedStartDate}
                    </span>
                  </div>

                  <div className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-(--text-muted) bg-(--bg-card) group-hover:border-red-400 transition-colors" />
                    <span className="block text-[10px] font-bold text-(--text-muted) uppercase tracking-wider mb-1">
                      Target End
                    </span>
                    <span className="text-lg font-bold text-white tracking-tight">
                      {formattedEndDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Card */}
              <div className="p-8 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="block text-[10px] font-bold text-(--text-muted) uppercase tracking-wider mb-2">
                      Total Completion
                    </span>
                    <span className="text-5xl font-black text-white tracking-tighter">
                      {project.progress}
                      <span className="text-2xl text-(--text-muted)">%</span>
                    </span>
                  </div>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-linear-to-r from-(--color-primary) to-indigo-500 relative overflow-hidden"
                    style={{ width: `${project.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-2 text-(--text-muted) mb-2">
        <FontAwesomeIcon icon={icon} className="text-xs opacity-50" />
        <span className="text-[9px] font-black uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div className="text-lg font-bold text-(--text-primary) truncate">
        {value}
      </div>
    </div>
  );
}
