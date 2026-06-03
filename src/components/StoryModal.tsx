import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import VideoPlayer from "@/components/VideoPlayer";
import { X, Play, TrendingUp, Users, DollarSign, Clock, Star, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioItem {
  title: string;
  category: string;
  views: string;
  subscribers: string;
  revenue: string;
  thumbnail: string;
  description: string;
  story: string;
  clientName: string;
  clientRole: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  videoSrc: string;
  thumbnailSrc: string;
}

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: PortfolioItem | null;
}

const StoryModal = ({ isOpen, onClose, story }: StoryModalProps) => {
  if (!story) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-black pr-8">
            {story.title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-0 right-0 p-2 hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden"
          >
            <VideoPlayer
              src={story.videoSrc}
              poster={story.thumbnailSrc}
              fallbackSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              className="rounded-lg"
              aspectRatio="video"
              autoPlay={false}
              muted={false}
              showControls={true}
              loop={true}
            />
            
            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {story.category}
            </div>
            
            <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm shadow-lg">
              {story.views}
            </div>
            
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
              <h3 className="text-lg font-bold">{story.title}</h3>
              <p className="text-sm text-white/80">{story.clientName} • {story.duration}</p>
            </div>
          </motion.div>

          {/* Client Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gray-50 p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {story.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{story.clientName}</h3>
                  <p className="text-gray-600">{story.clientRole}</p>
                  <p className="text-sm text-red-600 font-medium">Project Duration: {story.duration}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* The Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">The Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{story.story}</p>
          </motion.div>

          {/* Challenge & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Card className="p-6 bg-red-50 border-red-200">
              <h4 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                The Challenge
              </h4>
              <p className="text-gray-700">{story.challenge}</p>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h4 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                Our Solution
              </h4>
              <p className="text-gray-700">{story.solution}</p>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">The Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="p-4 text-center bg-red-50 border-red-200">
                <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-red-600">{story.subscribers}</div>
                <div className="text-sm text-gray-600">Subscribers</div>
              </Card>
              <Card className="p-4 text-center bg-green-50 border-green-200">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-600">{story.revenue}</div>
                <div className="text-sm text-gray-600">Revenue</div>
              </Card>
              <Card className="p-4 text-center bg-blue-50 border-blue-200">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-600">{story.views}</div>
                <div className="text-sm text-gray-600">Views</div>
              </Card>
              <Card className="p-4 text-center bg-purple-50 border-purple-200">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-purple-600">{story.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
              <h4 className="text-lg font-bold text-black mb-4">Key Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {story.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center pt-6 border-t border-gray-200"
          >
            <p className="text-lg text-gray-600 mb-4">
              Ready to create your own success story?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="member" size="lg" className="px-8">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="about" size="lg" className="px-8">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoryModal;
